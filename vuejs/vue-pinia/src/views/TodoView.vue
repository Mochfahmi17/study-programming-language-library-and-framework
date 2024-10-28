<template>
  <h1>Ini halaman TodoList</h1>
  <div class="main">
    <form @submit.prevent="todoStore.addTodo(newTodo)">
      <input type="text" v-model="newTodo" placeholder="add new todo..." />
      <button type="submit">Add</button>
    </form>

    <div class="btn">
      <button @click="show = 'all'">Show All</button>
      <button @click="show = 'done only'">Done Only</button>
      <button @click="show = 'undone only'">Undone Only</button>
    </div>

    <div class="showAll" v-if="show == 'all'">
      <ul>
        <li v-for="item in todoStore.showAll">{{ item.name }} <button v-if="!item.isDone" @click="todoStore.setDone(item.name)">Done</button><button v-else @click="todoStore.setUndone(item.name)">UnDone</button></li>
      </ul>
    </div>

    <div class="doneOnly" v-if="show == 'done only'">
      <ul>
        <li v-for="item in todoStore.doneOnly">{{ item.name }} <button v-if="!item.isDone" @click="todoStore.setDone(item.name)">Done</button><button v-else @click="todoStore.setUndone(item.name)">UnDone</button></li>
      </ul>
    </div>

    <div class="undoneOnly" v-if="show == 'undone only'">
      <ul>
        <li v-for="item in todoStore.undoneOnly">{{ item.name }} <button v-if="!item.isDone" @click="todoStore.setDone(item.name)">Done</button><button v-else @click="todoStore.setUndone(item.name)">UnDone</button></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
}

.main .btn {
  margin-top: 20px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
}

.main form {
  position: relative;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main form input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.main form button {
  position: absolute;
  right: 0;
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
}

ul {
  list-style: none;
}

ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  margin: 10px;
  padding: 10px;
}
</style>

<script>
import { useTodoStore } from "../stores/todoStore";

export default {
  setup() {
    const todoStore = useTodoStore();

    return { todoStore };
  },
  data() {
    return {
      newTodo: "",
      show: "all",
    };
  },
};
</script>

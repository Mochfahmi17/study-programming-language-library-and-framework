import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todolist: [
      { name: "Belajar HTML", isDone: false },
      { name: "Belajar CSS", isDone: false },
      { name: "Belajar JavaScript", isDone: false },
      { name: "Belajar PHP", isDone: false },
    ],
  }),
  getters: {
    showAll(state) {
      return state.todolist;
    },
    doneOnly(state) {
      return state.todolist.filter((item) => item.isDone);
    },
    undoneOnly(state) {
      return state.todolist.filter((item) => !item.isDone);
    },
  },
  actions: {
    setDone(name) {
      // this.todolist[name].isDone = !this.todolist[name].isDone;
      this.todolist.find((item) => item.name == name).isDone = true;
    },
    setUndone(name) {
      // this.todolist[name].isDone = !this.todolist[name].isDone;
      this.todolist.find((item) => item.name == name).isDone = false;
    },

    addTodo(data) {
      const exist = this.todolist.filter((item) => item.name == data).length;
      if (exist) {
        alert("tugas sudah ada");
      } else {
        this.todolist.push({ name: data, isDone: false });
      }
    },
  },
});

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="menu">
    <Navbar />
  </div>
  <div class="main">
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.menu {
  background-color: #eee;
  line-height: 2;
  padding: 10px;
}
</style>

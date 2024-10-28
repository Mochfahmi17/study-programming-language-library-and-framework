<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>Ini halaman user detail {{ $route.params.name }}</h1>
  <br />
  <RouterLink :to="'/user/' + $route.params.name + '/posts'">{{ $route.params.name }}'s Posts</RouterLink><br />
  <RouterLink :to="'/user/' + $route.params.name + '/profile'">{{ $route.params.name }}'s Profile</RouterLink>
</template>

<script setup>
import MainButton from './components/Button.vue'

const greeting = 'Hello World!'
const blogPost = `<p style="color:red;">Ini adalah BlogPost</p>`
const idBlog = 'blog-1'
const blogClass = 'text-2xl flex flex-col'
</script>

<template>
  <MainButton />
  <MainButton title="Register" />
  <MainButton title="Login" />
  <p>{{ greeting }}</p>
  <OptionsComponent />
  <!-- Vue mendukung penulisan kebab case -->
  <composition-component />

  <!-- Ini adalah teks interpolation -->
  <div :id="idBlog" :class="blogClass">{{ blogPost }}</div>

  <!-- Ini adalah raw HTML -->
  <div v-html="blogPost"></div>
</template>

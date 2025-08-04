<script setup>
defineOptions({
  name: 'MainButton',
})

const { title = 'Button' } = defineProps({
  title: String,
})

const isLoading = false

const buttonAttr = {
  disabled: isLoading,
  class: 'text-3xl bg-black text-white',
}

// const renderIsLoading = () => {
//   if (isLoading) {
//     return 'Loading...'
//   } else {
//     return props.title
//   }
// }

const url = {
  attr: 'href',
  link: '/home',
}
</script>

<template>
  <!-- Ini adalah penulisan dynamic arguments -->
  <a :[url.attr]="url.link"
    ><button v-bind="buttonAttr" :id="`id-${1}`">
      {{ isLoading ? 'loading...' : title }}
    </button></a
  >
</template>

<style scoped></style>

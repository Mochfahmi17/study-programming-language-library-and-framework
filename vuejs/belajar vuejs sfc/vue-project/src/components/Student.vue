<script>
export default {
  props: {
    studentName: String,
  },
  emits: ["response"],
  methods: {
    showData() {
      this.$emit("response", this.studentName);
    },
  },
};
</script>

<template>
  <slot>Ini slot default dati child component</slot> <br />
  Halo, ini adalah component {{ studentName }} <button @click="showData()">Show Detail</button>
</template>

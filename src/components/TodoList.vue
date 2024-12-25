<script setup>
const items = [
  {
    id: 1,
    text: "Learn Vue 3",
    done: true
  },
  {
    id: 2,
    text: "Learn Vue Router 2",
    done: false
  },
  {
    id: 3,
    text: "Learn Vue Pinia",
    done: false
  },
  {
    id: 4,
    text: "Learn Vue Pinia 2",
    done: false
  }
];
</script>

<template>
  <h1>Todo List</h1>
  <template v-for="item in items">
    <ul v-if="!item.done" :key="item.id">
      <li v-for="(value, key) in item">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </template>

  <h1 v-for="i in 10">Hello {{ i }}</h1>
</template>

<style scoped>

</style>
<script setup>

const {counter, name} = defineProps(["counter", "name"])

</script>

<template>
  <h1>Counter {{name}} : {{ counter}}</h1>
</template>

<style scoped>

</style>
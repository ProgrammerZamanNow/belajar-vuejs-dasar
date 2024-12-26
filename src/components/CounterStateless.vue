<script setup>

const {counter, name, increment} = defineProps({
  counter: Number,
  name: String,
  increment: Number
})

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div>
    <h1>Counter {{ name }} : {{ counter }}</h1>
    <button @click.stop="$emit('click', increment)">Increment {{ name }}</button>
  </div>
</template>

<style scoped>

</style>
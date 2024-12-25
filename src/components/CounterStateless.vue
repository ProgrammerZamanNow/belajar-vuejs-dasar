<script setup>

const {counter, name, increment} = defineProps({
  counter: Number,
  name: String,
  increment: Number
})
const emits = defineEmits(["click"]);

function buttonClick() {
  emits("click", increment);
}

</script>

<template>
  <div>
    <h1>Counter {{ name }} : {{ counter }}</h1>
    <button @click="buttonClick">Increment {{ name }}</button>
  </div>
</template>

<style scoped>

</style>
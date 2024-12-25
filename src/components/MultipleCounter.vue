<script setup>

import Counter from "./Counter.vue";
import CounterStateless from "./CounterStateless.vue";
import {ref} from "vue";

const counter1 = "Eko";
const counter2 = "Budi";

const counter = ref(0);

</script>

<template>
  <Counter :name="counter1" initial-count="10"/>
  <Counter v-bind:name="counter2" initial-count="20"/>

  <CounterStateless name="Joko" :counter="counter"/>
  <CounterStateless name="Morro" :counter="counter"/>
  <button @click="counter++">Increment Counter</button>
</template>

<style scoped>

</style>
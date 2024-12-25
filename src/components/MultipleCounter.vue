<script setup>

import Counter from "./Counter.vue";
import CounterStateless from "./CounterStateless.vue";
import {ref} from "vue";

const counter1 = "Eko";
const counter2 = "Budi";

const counter = ref(0);

function increment(value){
  counter.value += value;
}

</script>

<template>
  <Counter :name="counter1" initial-count="10"/>
  <Counter v-bind:name="counter2" initial-count="20"/>

  <CounterStateless name="Joko" :counter="counter" :increment="1" v-on:click="increment"/>
  <CounterStateless name="Morro" :counter="counter" :increment="2" @click="increment"/>
</template>

<style scoped>

</style>
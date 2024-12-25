<script setup>
import {nextTick, ref} from "vue";

const props = defineProps(["name", "initialCount"])

console.info(`Load component`);
let counter = ref({
  count: Number(props.initialCount),
  name: "Eko"
});

async function increment(){
  console.info(`Increment counter : ${counter.value.count}`);
  counter.value = {
    name: counter.value.name,
    count: counter.value.count + 1
  };

  await nextTick();

  counter.value.count++;

  await nextTick();

  counter.value.count++;

  await nextTick();

  console.log("Increment count after nextTick");
}
</script>

<template>
  <div>
    <h1 id="count">Counter {{props.name}} : {{counter.count}}</h1>
    <button v-on:click="increment">Increment</button>
  </div>
</template>

<style scoped>

</style>
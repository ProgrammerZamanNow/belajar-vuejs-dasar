<script setup>
console.info("Hello Vue");

const hello = "<h1>Hello Vue</h1>"

const data = {
  class: "hello",
  id: "hello"
};

const buttonDisabled = false;

function helloFunction(){
  return "Hello World";
}
</script>

<template>
  <h1 v-bind="data">{{hello.toUpperCase()}}</h1>

  <h2>{{ 100 * 200 }}</h2>

  <h2>{{helloFunction()}}</h2>

  <div :class="data.class" v-html="hello"></div>

  <button :disabled="buttonDisabled">This is Button</button>
</template>

<style scoped>
.hello {
  color: green;
}
</style>
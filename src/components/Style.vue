<script setup>


import {ref} from "vue";

const array = ["red", "bold"];

const red = ref(false);
const bold = ref(false);

function toggleRed() {
  red.value = !red.value;
}

function toggleBold() {
  bold.value = !bold.value;
}

const style1 = {
  color: "red"
}

const style2 = {
  textTransform: "uppercase",
  fontWeight: "bold"
}

</script>

<template>
  <h1 :class="{red:red, bold: bold}">Style</h1>
  <h1 :class="array">Style</h1>

  <h1 :style="style1">Style</h1>
  <h1 :style="style2">Style</h1>
  <h1 :style="[style1, style2]">Style</h1>

  <button v-on:click="toggleRed">Red</button>
  <button v-on:click="toggleBold">Bold</button>
</template>

<style scoped>
.red {
  color: red;
}

.bold {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
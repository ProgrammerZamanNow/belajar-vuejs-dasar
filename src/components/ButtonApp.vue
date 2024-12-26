<script setup>

import MyButton from "./MyButton.vue";
import Container from "./Container.vue";

function clickHandler() {
  alert("You click me");
}
</script>

<template>
  <Container title="Contoh Button">
    <template #header="attributes">
      <h1>Button App {{attributes.counter}}</h1>
    </template>
    <template v-slot:default="attributes">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cumque eius, fuga illum inventore maxime nobis nostrum perferendis quaerat sed similique sunt. Beatae explicabo magnam optio. Autem, debitis, enim!</p>
      <MyButton class="button" @click="clickHandler" :name="attributes.counter" contoh="Kurniawan"/>
    </template>
    <template #footer>
      <p>Copyright 2024 @ProgrammerZamanNow</p>
    </template>
  </Container>
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.button:active {
  background-color: #00408d;
  transform: scale(0.98);
}

.button:focus {
  outline: 2px solid #80bdff;
  outline-offset: 2px;
}
</style>
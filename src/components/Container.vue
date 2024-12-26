<script setup>
import {ref, useSlots} from "vue";

const counter = ref(0);
</script>

<template>
  <div v-if="$slots.header">
    <slot name="header" :counter="counter">
      <h1>Default Header</h1>
    </slot>
  </div>
  <div v-if="$slots.default">
    <slot name="default" :counter="counter">
      <p>Anda belum mengisi content nya</p>
    </slot>
  </div>
  <div v-if="$slots.footer">
    <slot name="footer" :counter="counter">
      <p>Default Footer</p>
    </slot>
  </div>
  <div>
    <button @click="counter++">Increment Counter</button>
  </div>
</template>

<style scoped>

</style>
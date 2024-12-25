<script setup>
const product = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    validator(value, props) {
      return value.trim().length !== 0;
    }
  },
  price: {
    type: Number,
    required: true,
    validator(value, props) {
      return value > 0;
    }
  }
})
</script>

<template>
  <h1>Product</h1>
  <p>Id : {{ product.id }}</p>
  <p>Name : {{ product.name }}</p>
  <p>Price : {{ product.price }}</p>
</template>

<style scoped>

</style>
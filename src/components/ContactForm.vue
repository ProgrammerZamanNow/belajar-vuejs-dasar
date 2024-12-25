<script setup>
const model = defineModel({
  type: Object,
  required: true,
  get: (value) => {
    value.email = value.email.toUpperCase();
    return value;
  }
});
</script>

<template>
  <h1>Contact Us</h1>
  <form>
    <div>
      <label for="name">Name
        <input type="text" id="name" v-model="model.name">
      </label>
    </div>
    <div>
      <label for="email">Email
        <input type="email" id="email" v-model="model.email">
      </label>
    </div>
    <div>
      <label for="age">Age
        <input type="number" id="age" v-model.number="model.age">
      </label>
    </div>
    <div>
      <label for="type">Type
        <select id="type" name="type" v-model="model.type">
          <option value="Regular">Regular</option>
          <option value="VIP">VIP</option>
        </select>
      </label>
    </div>
    <div>
      <label for="complain">Complain
        <input type="checkbox" id="complain" v-model="model.complain">
      </label>
    </div>
    <div>
      <label for="message">Message
        <textarea id="message" name="message" v-model="model.message"></textarea>
      </label>
    </div>
  </form>
</template>

<style scoped>

</style>
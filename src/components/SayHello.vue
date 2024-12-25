<script setup>
import {computed, reactive, ref} from "vue";

const person = reactive({
  firstName: "",
  lastName: ""
})

function sayHello(event){
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}

const fullName = computed((oldName) => {
  console.log(`change old name ${oldName}`);
  return `${person.firstName} ${person.lastName}`;
})

const counter = ref(0);

function changeFirstName(event){
  person.firstName = event.target.value;
}

function changeLastName(event){
  person.lastName = event.target.value;
}
</script>

<template>
  <div>
    <form>
      <button v-on:click="counter++">Increment {{counter}}</button> <br>
      <input placeholder="First Name" type="text" id="firstName" v-on:input="changeFirstName"> <br>
      <input placeholder="Last Name" type="text" id="lastName" @input="changeLastName"> <br>
      <button v-on:click.prevent="sayHello">Say Hello</button>
    </form>
  </div>
  <h1>Hello {{ fullName }}</h1>
</template>

<style scoped>

</style>
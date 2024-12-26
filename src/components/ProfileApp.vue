<script setup>
import {provide, reactive} from "vue";
import ProfileAddress from "./ProfileAddress.vue";
import Profile from "./Profile.vue";

const profile = reactive({
  name: "Eko",
  email: "eko@test.com"
})

provide("profile", profile);
</script>

<template>
  <input v-model="profile.name" type="text" placeholder="Name"/>
  <Profile/>
  <ProfileAddress/>
</template>

<style scoped>

</style>
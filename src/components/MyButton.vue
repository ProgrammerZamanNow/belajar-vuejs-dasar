<script setup>
import {useAttrs} from "vue";

const props = defineProps(["contoh"])
console.info(props)

const attributes = useAttrs();
console.info(attributes);

</script>

<template>
<button>My Button : {{attributes.name}}</button>
</template>

<style scoped>

</style>
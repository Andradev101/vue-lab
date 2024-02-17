<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps ({  label: String })
const emit = defineEmits(['performLogout']);

onMounted(() => {
  //console.log(`the component is now mounted.`)
})
onUnmounted(() => {
  //console.log(`the component is now unmounted.`)
})

function handleLogout() {
  console.log("handling logout...");
  emit('performLogout');
  console.log("logout completed");
}
</script>

<template>
    <button @click="handleLogout">{{ label }}</button>
</template>
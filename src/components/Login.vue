<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const username = ref('');
const password = ref('');
const emit = defineEmits(['unmountItself']);

onMounted(() => {
  console.log(`the component is now mounted.`)
})
onUnmounted(() => {
  console.log(`the component is now unmounted.`)
})

function verifyLoginInfo() {
    console.log(username.value);
    console.log(password.value);
    if(true) estabilishSession();
}
function estabilishSession() {
    console.log("session estabilished");
    emit('unmountItself');
}
</script>

<template>
  <main>
    <p>login component</p>
    <input type="text" v-model="username" placeholder="username/email">
    <input type="password" v-model="password" placeholder="password">
    <button @click="verifyLoginInfo">sign in</button>
  </main>
</template>
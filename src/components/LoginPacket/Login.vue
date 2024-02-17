<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const username = ref('');
const password = ref('');
const emit = defineEmits(['unmountItself, toggleShowLogin']);

onMounted(() => {
  //console.log(`the component is now mounted.`)
})
onUnmounted(() => {
  //console.log(`the component is now unmounted.`)
})

function handleLoginInfo() {
    if(true) { //just for dabbling, here must come the auth service
      estabilishSession();
      emit('toggleShowLogin');
    }
}
function estabilishSession() {
    console.log("estabilishing session...");
    emit('unmountItself');
    console.log("session estabilished");
}
</script>

<template>
  <main>
    <p>login component</p>
    <input type="text" v-model="username" placeholder="username/email">
    <input type="password" v-model="password" placeholder="password">
    <button @click="handleLoginInfo">sign in</button>
  </main>
</template>
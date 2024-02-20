<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import LoginWrapper from './components/LoginPacket/LoginWrapper.vue';
import { user } from './statemanagement/user.js'; 
import { pseudoBackendService } from './statemanagement/pseudoBackendService.js'; 
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <LoginWrapper/>
  </header>
  
  <div v-if="!(user.isSignedIn)" class="border">
      <p>Data from: pseudoBackendService global state management service</p>
      <p>Using: https://randomuser.me/api/</p>
      <h2>Await for the fetch to conclude.</h2>
      <h3>Click login</h3>
      <h3>Copy n paste username/password details</h3>
      <h3>Click sign in</h3>
    <div v-if="pseudoBackendService.showComponent">
      <p class="blackText">login: {{ pseudoBackendService.userData.login.username }}</p>
      <p class="blackText">password:  {{ pseudoBackendService.userData.login.password }}</p>
    </div>
  </div>
    <div v-else class="border">
      <p>Data from: pseudoBackendService global state management service</p>
      <p>Using: https://randomuser.me/api/</p>
      <h1>Signed in as {{ pseudoBackendService.userData.login.username }}</h1>
  </div>

  <RouterView />
</template>

<style scoped>
.border {
  border: 1px solid black;
  background-color: white;
}
.blackText {
  color: black;
}
</style>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import LoginWrapper from './components/LoginPacket/LoginWrapper.vue';
import { user } from './statemanagement/user.js'; 
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <LoginWrapper/>
  </header>
  <RouterView />
</template>


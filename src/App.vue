<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import LoginWrapper from './components/LoginPacket/LoginWrapper.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <LoginWrapper/>
  </header>
  <RouterView />
</template>


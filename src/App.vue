<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'

const mountLogin = ref(true);
const showLoginComponent = ref(false);
let showLoginButtonLabel = ref("login");
const logoutButtonLabel = ref("logout");

function toggleLoginComponent() {
  showLoginComponent.value = !showLoginComponent.value;
  showLoginButtonLabel = (showLoginComponent.value == true) ? "close" : "login";
}

function unmountLoginComponent() {
  mountLogin.value = false;
}

function setMountLogin() {
  mountLogin.value = true;
}

function performLogout() {
  setMountLogin();
}

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
    <button v-if="mountLogin" @click="toggleLoginComponent">{{ showLoginButtonLabel }}</button>
    <Login v-if="mountLogin" v-show="showLoginComponent" @unmountItself="unmountLoginComponent" @toggleShowLogin="toggleLoginComponent"/>
    <Logout v-else :label="logoutButtonLabel" @performLogout="performLogout"/>
  </header>
  <RouterView />
</template>


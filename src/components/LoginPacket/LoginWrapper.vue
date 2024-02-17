<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Login from './Login.vue'
import Logout from './Logout.vue'

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
    <button v-if="mountLogin" @click="toggleLoginComponent">{{ showLoginButtonLabel }}</button>
    <Login v-if="mountLogin" v-show="showLoginComponent" @unmountItself="unmountLoginComponent" @toggleShowLogin="toggleLoginComponent"/>
    <Logout v-else :label="logoutButtonLabel" @performLogout="performLogout"/>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { user } from '../../statemanagement/user.js';
import { pseudoBackendService } from '../../statemanagement/pseudoBackendService.js'; 
import ErrorParagraph from '../ErrorParagraph.vue';

const username = ref('');
const password = ref('');
let errorMsg = ref('');
const emit = defineEmits(['unmountItself, toggleShowLogin', 'userSignedIn']);

onMounted(() => {
  fetchPseudoBackendUserData();
})
onUnmounted(() => {
  //console.log(`the component is now unmounted.`)
})

async function handleLoginInfo() {
    if(username.value == pseudoBackendService.userData.login.username && password.value == pseudoBackendService.userData.login.password) { //just for dabbling, here must come the auth service
      estabilishSession();
      emit('toggleShowLogin');
      let response = getUserInfo();
      setUserStateInfo(response);
      user.signIn();
    } else {
      //handle login error
      errorMsg.value = user.setLoginErrorMsg(username.value, password.value);
    }
}

function estabilishSession() {
    console.log("estabilishing session...");
    emit('unmountItself');
    console.log("session estabilished");
}

async function fetchPseudoBackendUserData() {
  let response = await fetch(`https://randomuser.me/api/`);
  let jsonResponse = await response.json();
  pseudoBackendService.setUserData(jsonResponse.results[0]);
}

function getUserInfo() {
  return pseudoBackendService.userData;
}

function setUserStateInfo(fetchedUser) {
  user.setUserInfo(fetchedUser);
}
</script>

<template>
  <main>
    <p>login component</p>
    <input type="text" v-model="username" placeholder="username/email">
    <input type="password" v-model="password" placeholder="password">
    <button @click="handleLoginInfo">sign in</button>
    <ErrorParagraph :errorMsg="errorMsg"/>
  </main>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { user } from '../../statemanagement/user.js'; 

const username = ref('');
const password = ref('');
const emit = defineEmits(['unmountItself, toggleShowLogin', 'userSignedIn']);

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
      //emit('userSignedIn'); emit from child components doesnt bubble for the root
      //TODO
        //From this component, i should be able to emit an event to the root component (or any other), confirming the user is indeed signed in.
      setUserStateInfo(getUserInfo());
      user.signIn();
    }
}

function estabilishSession() {
    console.log("estabilishing session...");
    emit('unmountItself');
    console.log("session estabilished");
}

function getUserInfo() {
  return {"gender":"female","name":{"title":"Ms","first":"Inaya","last":"Hov"},"city":"Vinstra","state":"Vestfold","country":"Norway","email":"inaya.hov@example.com","login":{"uuid":"65ee7fff-32ff-4c02-a26a-14e60743117d","username":"redbutterfly337"},"dob":{"date":"1994-05-26T19:02:39.121Z","age":29},"picture":{"large":"https://randomuser.me/api/portraits/women/3.jpg","medium":"https://randomuser.me/api/portraits/med/women/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/3.jpg"}};
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
  </main>
</template>
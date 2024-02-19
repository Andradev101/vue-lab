<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { user } from '../../statemanagement/user.js';

const props = defineProps ({ label:String })
const buttonCoordinates = reactive({left: 0, top: 0});
let showUserHeaderOptions = ref(false);
let userHeaderOptionsComponentRef = ref(null);

function handleClick(evt) {
    getPositionOffset(evt.target);
}

function toggleShowUserHeaderOptions() {
    showUserHeaderOptions.value = !(showUserHeaderOptions.value);
}

function getPositionOffset(component) { //must be reusable
    buttonCoordinates.left = component.offsetLeft + "px";
    buttonCoordinates.top = (component.offsetHeight + component.offsetTop)  + "px";
    toggleShowUserHeaderOptions();
}

</script>

<template>
    <button class="UserHeaderOptions" @click="handleClick">{{ label }}</button>
    <div :style="buttonCoordinates" ref="userHeaderOptionsComponentRef" v-show="showUserHeaderOptions" class="popup">
        <img :src="user.data.picture.thumbnail"></img>
        <p>Hello, {{ user.data.name.first + " " + user.data.name.last }}!</p>
        <!-- <p>profile</p>
        <p>settings</p> -->
    </div>
<!-- 
    I've just hit a wall there. When using "v-if" instead of "v-show".
    When the component is inserted to the DOM with "v-if", it awaits the next tick to serve the ref variable, resulting in a null ref on the first click. 
    refer to: https://github.com/vuejs/composition-api/issues/296
-->

</template>

<style scoped>
.UserHeaderOptions {position: relative}
.popup {
    display: flex;
    position: absolute;
    border: 1px solid black;
}
p {
    display: inline;
}
</style>
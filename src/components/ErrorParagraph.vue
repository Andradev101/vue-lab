<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps ({ errorMsg:String })
</script>

<template>
<p class="red">{{ errorMsg }}</p>
</template>

<style scoped>
    .red {
        color: red;
    }
</style>
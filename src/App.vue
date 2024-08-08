<script setup>
import {ref, watchEffect,computed} from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import auth from './auth'
let isLogin = computed(()=>{
    return auth.isLogin();
});



</script>

<template>
    <Header-Nav v-if="isLogin"></Header-Nav>
    <RouterView></RouterView>
</template>

<style scoped>

</style>

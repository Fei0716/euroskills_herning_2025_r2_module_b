<script setup>
import auth from '../auth';
import { useRouter } from 'vue-router';
const router = useRouter();
 function logout(){
    auth.logout();
    router.push({name: 'Login'});
 }
</script>

<template>
  <header>
     <nav class="navbar" role="navigation">
        <Router-Link :to="{name: 'Restaurants'}" class="navbar-brand"><img src="/dineease_logo.png"></Router-Link>
        <ul class="navbar-nav" role="menubar">
          <li class="nav-item" role="menuitem"><RouterLink :to="{name: 'Restaurants'}" class="nav-link">Restaurants</RouterLink></li>
          <li class="nav-item"><RouterLink :to="{name: 'Users'}" class="nav-link">Users</RouterLink></li>
          <li class="nav-item"><RouterLink :to="{name: 'Reviews'}" class="nav-link">Reviews</RouterLink></li>
        </ul>
        <button class="btn-primary" @click="logout">Logout</button>
     </nav>
  </header>
</template>

<style scoped>

</style>
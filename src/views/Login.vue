<script setup>
import { ref } from 'vue'
import api from '../api';
import auth from '../auth';
import { useRouter } from 'vue-router';
// states
const email = ref('');
const password = ref('');
const router = useRouter();
const error  = ref(null);
async function loginUser(){
  error.value = null;
  try{
      const {data} = await api.get('users');
      if(data.find((user) => user.email === email.value && user.roleId ===1) && password.value.length >= 4){
           auth.login(email.value);
           router.push({name: 'Restaurants'});
      }
      error.value = 'Incorrect username or password';

  }catch(e){
    console.error(e);
  }
}
</script>

<template>
    <img src="/dineease_logo.png" alt="Logo of DineEase" id="img-dineease">
   <section aria-label="Login Section" id="section-login">
     <h1 class="mb-1">Login</h1>
     <form @submit.prevent="loginUser" id="form-login">
        <div v-if="error" class="alert-danger mb-1">
            {{error}}
        </div>
        <div class="mb-1">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" class="form-control" required>
        </div>
       <div class="mb-2">
         <label for="password">Password</label>
         <input type="password" name="password" id="password" v-model="password" class="form-control" required>
       </div>

       <div class="btn-group">
           <button type="submit" class="btn-primary">Log In</button>
           <button type="button" class="btn-secondary">Register</button>
       </div>
     </form>
   </section>
</template>

<style scoped>
    #section-login{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      padding: 1rem;
      border: 1px solid var(--secondary-color);
      border-radius: 1rem;
    }
    #form-login{
      width: 300px;
    }
    #form-login > div:not(:last-child){
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .form-control{
      width: 100%;
    }
    .btn-group{
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }
    #img-dineease{
      display: block;
      margin:  85px  auto;
      width: 200px;
    }
</style>
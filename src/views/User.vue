<script setup>
import { reactive, ref} from 'vue';
import api from '../api';

const users= reactive([]);
const userDetail = reactive({});
const ModalUser = ref(null);
async function getUsers(){
  try{
    let {data} = await api.get('users');
    data = data.filter((u) =>
      u.roleId == 2
    );
    users.splice(0, users.length);
    users.push(...data);

  }catch(e){
    console.error(e);
  }
}

async function updateStatus(id){
  try{
    const response = await api.put(`users/${id}`);
    await  getUsers();
  }catch(e){
    console.error(e);
  }
}
async function getUserDetail(uid){
  try{
    const {data} = await api.get(`users/${uid}`);
    userDetail.firstName = data.firstName;
    userDetail.lastName = data.lastName;
    userDetail.email = data.email;
    userDetail.isActive = data.isActive;
    userDetail.subscriptionPlan = data.planName;
    userDetail.subscriptionFrequency = data.annualPayment  == 1 ? 'Annual': 'Monthly';
    ModalUser.value.showModal();

  }catch(e){
    console.error(e);
  }
}
function showUserDetail(uid){
  getUserDetail(uid);
}
function closeModal(){
  ModalUser.value.close();

}
getUsers();
</script>

<template>
  <section aria-label="User Section" id="section-user">
    <h1 class="my-2 text-center">User</h1>

    <table class="table" id="table-user">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Enabled</th>
        <th>Action</th>
      </tr>

      <tr v-for="u in users" :key="u.name">
        <td class="text-underline" @click="showUserDetail(u.id)">{{u.firstName}} {{u.lastName}}</td>
        <td>{{u.email}}</td>
        <td>{{u.isActive? 'Yes': 'No'}}</td>
        <td>
          <button class="btn-primary" v-if="u.isActive" @click="updateStatus(u.id)">Disable</button>
          <button class="btn-primary" v-else @click="updateStatus(u.id)">Enable</button>
        </td>
      </tr>
    </table>
  </section>

<!--  user detail modal dialog-->
  <dialog id="modal-user" ref="ModalUser">
      <h2 class="mb-2">{{userDetail.firstName}} {{userDetail.lastName}}</h2>
      <div class="mb-1">
        <strong>Email: </strong>
        <span>{{userDetail.email}}</span>
      </div>
      <div class="mb-2">
        <strong>Enabled: </strong>
        <span>{{userDetail.isActive? 'Yes' : 'No'}}</span>
      </div>
       <h3 class="mb-1 text-center">Subscription</h3>
       <div class="mb-1">
         <strong>Subscription Plan: </strong>
         <span>{{userDetail.subscriptionPlan}}</span>
       </div>
        <div class="mb-1">
          <strong>Subscription Frequency: </strong>
          <span>{{userDetail.subscriptionFrequency}}</span>
        </div>

        <button class="btn-primary" @click="closeModal">Close</button>
  </dialog>
</template>

<style scoped>
html{
  overflow: hidden!important;
}
#modal-user{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.25rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px 1px 2px 2px rgb(205 205 205 / 75%);
}
dialog[open]{
  animation: fadeIn 0.2s ease-in forwards;
}
@keyframes fadeIn{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
#modal-user h2,button{
  text-align: center;
}
</style>
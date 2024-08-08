<script setup>
import { reactive, ref} from 'vue';
import api from '../api';

const reviews = reactive([]);
const restaurants = reactive([]);
async function getReviews(){
  try{
    let {data} = await api.get('reviews');
    reviews.splice(0, reviews.length);
    reviews.push(...data);

  //   add the restaurant details
    reviews.forEach((r)=>{
      r.restaurant = restaurants.find((res) => res.id === r.restaurantId);
    });
  }catch(e){
    console.error(e);
  }
}
async function getRestaurants(){
  try{
    const {data} = await api.get('restaurants');
    restaurants.push(...data);
  }catch(e){
    console.error(e);
  }
}
async function removeReview(id){
  try{
    const response = await api.delete(`reviews/${id}`);
    await  getReviews();
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
getRestaurants();
getReviews();
</script>

<template>
  <section aria-label="User Section" id="section-review">
    <h1 class="my-2 text-center">Reviews</h1>

    <table class="table" id="table-review">
      <tr>
        <th style="width:45%">Restaurant</th>
        <th >Reviewer</th>
        <th>Rating</th>
        <th>Action</th>
      </tr>

      <tr v-for="r in reviews" :key="r.id">
        <td>
          <label class="accordion" :for="'accordion-' + r.id">
            <div class="accordion-head">
              <span class="accordion-arrow">&lt</span> {{r.restaurant.name}}, {{r.restaurant.city}}, {{r.restaurant.countryCode}}
            </div>
            <input type="checkbox" class="toggle-accordion" :name="'accordion-' + r.id" :id="'accordion-' + r.id" hidden>
            <div class="accordion-body">
              {{r.comment}}
            </div>
          </label>

        </td>
        <td>{{r.name}}</td>
        <td>
        <!--              for using stars to represent each of the ratings-->
          <template v-for="n in 5">
            <span class="star-active" v-if="n <= r.rating"> &starf;</span>
            <span class="star-disabled"v-else> &starf;</span>
          </template>
        </td>
        <td>
          <button class="btn-primary"  @click="removeReview(r.id)">Remove</button>
        </td>
      </tr>
    </table>
  </section>

</template>

<style scoped>

</style>
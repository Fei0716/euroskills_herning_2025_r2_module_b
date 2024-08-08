<script setup>
import {computed, reactive, ref} from 'vue';
import api from '../api';

const restaurants = reactive([]);
const paginateCounter = ref(0);
const paginateList = computed(()=>{
  return restaurants.slice(paginateCounter.value* 10, paginateCounter.value* 10 + 10);
});
const paginatePageNo = computed(()=>{
  return Math.ceil(restaurants.length / 10);
});
async function getRestaurants(){
  try{
    const {data} = await api.get('restaurants');
    restaurants.push(...data);
  }catch(e){
    console.error(e);
  }
}
function paginateTo(newCounter){
  paginateCounter.value = newCounter;
}
function paginateLeft(){
  if(paginateCounter.value > 0){
    paginateCounter.value--;
  }
}
function paginateRight(){
  if(paginateCounter.value < paginatePageNo.value - 1){
    paginateCounter.value++;
  }
}
getRestaurants();
</script>

<template>
    <section aria-label="Restaurant Section" id="section-restaurant">
        <h1 class="my-2 text-center">Restaurant</h1>

        <table class="table" id="table-restaurant">
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country Code</th>
            <th>Average Rating</th>
          </tr>

          <tr v-for="r in paginateList" :key="r.name">
            <td>{{r.name}}</td>
            <td>{{r.city}}</td>
            <td>{{r.countryCode}}</td>
            <td>
<!--              for using stars to represent each of the ratings-->
                 <template v-for="n in 5">
                      <span class="star-active" v-if="n <= r.rating"> &starf;</span>
                      <span class="star-disabled"v-else> &starf;</span>
                 </template>
            </td>
          </tr>
        </table>

<!--      pagination-->
        <div class="pagination">
          <button class="btn-pagination" @click="paginateLeft">&lt</button>
              <button class="btn-pagination" :class="{'btn-pagination-active': paginateCounter== i-1}" @click="paginateTo(i-1)" v-for="i in paginatePageNo">{{i}}</button>
          <button class="btn-pagination" @click="paginateRight">&gt</button>
        </div>
    </section>
</template>

<style scoped>

</style>
<template>
  <div>
    <Add :user="user" />
    <Books :user="user" />
  </div>
</template>

<script setup lang="ts">
import Add from "./Add.vue";
import Books from "./Books.vue";
import { useAppStore } from "../store/app-store";
import { Ref, onMounted, ref } from "vue";
import User from "../classes/user";
import { useRoute } from "vue-router";

const appStore = useAppStore();

const user: Ref<User> = ref('Rahul');

// const props = defineProps<{
//   userName: string;
// }>();

const routes = useRoute();
// const routeName:string=ref('');
// let routeName:string=ref("");

onMounted(()=>{
console.log("routes : ");
console.log(routes.params.name);

  // console.log(routes.name);
  // const id = $routes.params.id;
  // console.log("route : "+routes.params.id);
  
  // console.log(props.userName);
  // setUser( routes.name?.toString());
  
  // routeName = routeName.toString();
  // console.log("route : "+routeName.toString());
  
  // console.log("string representation of route : "+routes.name?.toString().trim());
  // setUser(routes.name!.toString());
  // setUser()
  
  
})

function setUser(userName:string ): void {

  console.log("inside setUser : "+userName);
  
  // if(props.userName == 'rahul') {
  //   user.value = appStore.rahul;
  //   return
  // }
  
  // if(props.userName == 'sachin') {
  //   user.value = appStore.sachin;
  //   return
  // }

  // user.value = appStore.suresh;


  //using routes
  if(userName == 'rahul') {
    console.log("setting rahul");
    user.value = appStore.rahul;
    return
  }
  
  if(userName == 'sachin') {
    console.log("setting sachin");
    user.value = appStore.sachin;
    return
  }
  console.log("setting suresh");
  user.value = appStore.suresh;
  


}

</script>

<style scoped></style>

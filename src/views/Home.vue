<template>
    <div>
      {{ user.name }}
      <Add :user="user" />
      <Books :user="user" />
    </div>
  </template>
  
  <script setup lang="ts">
  import Add from "../components/Add.vue";
  import Books from "../components/Books.vue";
  import { useAppStore } from "../store/app-store";
  import { Ref, onMounted, ref } from "vue";
  import User from "../classes/user";
  import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
  
  const appStore = useAppStore();
  
  // const user: Ref<User> = ref(appStore.rahul);
  
  // const props = defineProps<{
  //   userName: string;
  // }>();

  const user: Ref<User> = computed(getUser); 

  function getUser():User {
    const userName = routes.params.name;
    // console.log("User Name : "+userName);
    
    if(userName == 'suresh') {
      console.log("setting suresh");
      return appStore.suresh;
    }
    
    if(userName == 'sachin') {
      console.log("setting sachin");
      return appStore.sachin;
    }

    console.log("setting rahul");
    return appStore.rahul;
  }
  
  const routes = useRoute();
  
  onMounted(()=>{

    console.log("inside home :");

    // console.log("this.$route.query : "+$route.query);
    // console.log(routes.hash);
  
    console.log("query : "+routes.query.toString());
    console.log("path : "+routes.path);

    console.log("route params : "+routes.params.name);   
    
    // console.log("route name : "+routes.name);
    // console.log(props.userName);
    // setUser( routes.name?.toString());
    
    // routeName = routeName.toString();
    // console.log("route : "+routeName.toString());
    
    // console.log("string representation of route : "+routes.name?.toString().trim());
    // setUser(routes.name!.toString());

    // console.log(routes.params.name.toString());
    console.log("setting user : "+routes.params.name);

    
    
    // setUser(routes.params.name.toString().trim())
    
    
  })

  
  
  // function setUser(userName:string ): void {    
  
  //   console.log("inside setUser : "+userName);
    
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
  //   if(userName == 'rahul') {
  //     console.log("setting rahul");
  //     user.value = appStore.rahul;
  //     return
  //   }
    
  //   if(userName == 'sachin') {
  //     console.log("setting sachin");
  //     user.value = appStore.sachin;
  //     return
  //   }

  //   console.log("setting suresh");
  //   user.value = appStore.suresh;
    
  
  
  // }
  
  </script>
  
  <style scoped></style>
  
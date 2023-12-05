<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">Reading Lists</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <!-- :to="{name: 'home'}" -->
        <!-- @click="changeRoute('/user/rahul')" -->
        <!-- :to="router.push('/user/rahul')"  -->
        <MDBNavbarItem
          :to="{ name: 'home', params: { name: 'rahul' } }"
          href="#"
          :active="pathName == 'rahul'"
        >
          Rahul
        </MDBNavbarItem>
        <!-- :to="$router.push('/user/sachin')" -->
        <MDBNavbarItem
          :to="{ name: 'home', params: { name: 'sachin' } }"
          href="#"
          :active="pathName == 'sachin'"
        >
          Sachin
        </MDBNavbarItem>
        <!-- :to="{ name: 'suresh' }" -->
        <MDBNavbarItem
          :to="{ path: '/user/suresh' }"
          href="#"
          :active="pathName == 'suresh'"
        >
          Suresh
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-vue-ui-kit";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const collapse1 = ref(false);
const router = useRouter();
const routes = useRoute();

// const pathName = ref("rahul");
const pathName = computed(() => {
  // console.log("setting pathName");
  // console.log(routes.params.name);

  // if (routes.name) return routes.name;
  if (routes.params.name) return routes.params.name;
  return "";
  // return routes.name ?? ""
});

onMounted(() => {
  console.log("Navbar");

  console.log(routes.name);
  // pathName.value = router.currentRoute.value.name!.toString();
  // pathName.value = routes.name!.toString();
});
</script>

<style scoped></style>

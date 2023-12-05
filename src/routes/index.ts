import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  useRoute,
} from "vue-router";

import Rahul from "../views/Rahul.vue";
import Sachin from "../views/Sachin.vue";
import Suresh from "../views/Suresh.vue";
import Home from "../views/Home.vue";
import User from "../classes/user";

const routes = [
  { path: "/", redirect: {path:'/user/suresh'}  },
  // { path: '/', name: 'home', component: ... },
  { path: '/user/:name',name:'home', component: Home  },
  // {path:'/user/rahul', component: Home },
  // {path:'/user/sachin', component: Home },
  // {path:'/user/suresh', component: Home }

  // { path: "/rahul", name: "rahul", component: Rahul },
  // { path: "/sachin", name: "sachin", component: Sachin },
  // { path: "/suresh", name: "suresh", component: Suresh },
];

const route = useRoute()





const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});


export default router;

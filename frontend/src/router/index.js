import Vue from 'vue'
import Router from 'vue-router'
// import store from "@/store"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: "/",
      name: "Login",
      component: () => import(/* webpackChunkName: "Login" */"../views/login/Login.vue"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import(/* webpackChunkName: "Admin" */"../views/admin/Admin.vue"),
    },
    {
      path: "/users",
      name: "Users",
      component: () => import(/* webpackChunkName: "Users" */"../views/users/Users.vue"),
    },
  ]
});

router.beforeEach((to, from, next) => {
  // store.dispatch('Loading', true);
  next();
});
router.afterEach(() => {
  // store.dispatch('Loading', false);
});

export default router;

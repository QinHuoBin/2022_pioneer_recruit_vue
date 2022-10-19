import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/web",
    name: "Web",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Web.vue"),
  },
  {
    path: "/base64",
    name: "Base64",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/base64.vue"),
  },
  {
    path: "/weak_password",
    name: "weak_password",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/weak_password.vue"),
  },
  {
    path: "/misc",
    name: "Misc",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Misc.vue"),
  },
  {
    path: "/question",
    name: "question",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/question.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/info.vue"),
  },
  {
    path: "/bin",
    name: "Bin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/C_build.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

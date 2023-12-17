import { home } from "./module/home.js";
import VueRouter from "vue-router";
import Vue from "vue";
// 使用VueRouter
Vue.use(VueRouter);
const routes = [...home];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";

//Components
import HomeView from "../views/Home";
import ClientesView from "../views/Clientes";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/clientes",
      name: "clientes",
      component: ClientesView
    }
  ]
});

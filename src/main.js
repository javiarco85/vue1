import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Router from "vue-router";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  Router
}).$mount("#app");

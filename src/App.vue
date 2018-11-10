<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SISTEMA</span>
        <span class="font-weight-light"> Ventas</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Menu></Menu>
      <router-view>
        
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu
  },
  data() {
    return {
      //
    };
  }
};
</script>

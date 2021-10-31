<template>
  <v-app>
    <v-app-bar color="green" dense app>
      <v-app-bar-nav-icon @click.stop="isNavigationShow = !isNavigationShow"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Vuetify Bar</v-toolbar-title>
      <v-spacer></v-spacer>
      <UserPopover />
    </v-app-bar>

    <v-navigation-drawer v-model="isNavigationShow" app fixed absolute bottom temporary>
      <Navigation />
    </v-navigation-drawer>

  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import UserPopover from "./components/UserPopover.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",

  components: {
    UserPopover,
    Navigation
  },

  data: () => ({
    isNavigationShow: false
  }),
};
</script>

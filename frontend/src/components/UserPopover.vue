<template>
  <v-menu :close-on-content-click="true" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar color="indigo" size="36" v-bind="attrs" v-on="on">
        <span class="white--text text-h5">VU</span>
      </v-avatar>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar color="indigo" size="40">
              <span class="white--text text-h5">TQ</span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>FOUNDER OF VUETIFY</v-list-item-title>
            <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
          </v-list-item-content>

          <v-btn color="primary" text>Logout <v-icon>mdi-export</v-icon></v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {};
</script>

<style></style>

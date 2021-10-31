<template>
  <v-card class="mx-auto" max-width="350">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <v-spacer></v-spacer>
      <span>LOGIN</span>
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text>
      <v-text-field
        label="Email"
        prepend-icon="mdi-map-marker"
        clearable
        v-model="formLogin.email.value"
        :success="formLogin.email.success"
        :error-messages="formLogin.email.error"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        prepend-icon="mdi-map-marker"
        clearable
        v-model="formLogin.password.value"
        :success="formLogin.password.success"
        :error-messages="formLogin.password.error"
      ></v-text-field>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Service from "./services";
import ValidatorUtils from "../../plugins/validator.utils";

// form
const formLogin = {
  email: { value: "", success: false, error: [] },
  password: { value: "", success: false, error: [] },
};

export default {
  data: () => ({
    formLogin: formLogin,
  }),
  methods: {
    login() {
      ValidatorUtils.clear(this.formLogin);

      Service.login({
        email: this.formLogin.email.value,
        password: this.formLogin.password.value,
      })
        .then(() => {
          this.$router.push({ path: "admin" });
        })
        .catch((error) => {
          ValidatorUtils.show(this.formLogin, error);
        });
    },
  },
};
</script>

<style></style>

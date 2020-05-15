<template>
  <div>

    <v-card width="400px" class="ml-5 mt-5 mx-a">

      <v-card-title class="pb-0">
        <h1 class="titulo">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="mdi-account-circle"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text color="#25b535" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import API from "../Services/App";

export default {
  data() {
    return {
      email: "",
      showPassword: false,
      password: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be more than 8 characters"
      ]
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      };
      API.login(user)
        .then(response => {
          if (response.token) {
            console.log(user.email)
            localStorage.setItem("token", response.token);
            this.$root.$emit("login", true);
            this.$router.push("/");
          } else {
            console.log(response);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>
.titulo {
  color: #25b535;
}
</style>

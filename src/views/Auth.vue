<template>
  <div>
    <v-row class="d-flex justify-center mx-auto">
      <v-col cols="12" lg="12" sm="6" md="12  ">
        <h1 class="titulo">If you have an account, log in and if not, register</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-auto">
      <v-col cols="12" lg="6" sm="6" md="6">
        <Login v-on:login="login" />
      </v-col>
      <v-col cols="12" lg="6" sm="6" md="6">
        <Signup />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "../components/Login"
import Signup from "../components/Signup";

export default {
  components: {
    Login,
    Signup
  }
};
</script>

<style>
.titulo {
  color: #25b535;
  text-align: center;
}
</style>

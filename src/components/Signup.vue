<template>
  <div>
    <v-card  width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1 class="titulo">Signup</h1>
      </v-card-title>
      <v-card-text>
        <v-form >
          <v-text-field
            label="First-Name"
            v-model="firstName"
            prepend-icon="mdi-account-circle"
            :rules="userRules"
          ></v-text-field>
        <v-text-field
            label="Last-Name"
            v-model="lastName"
            prepend-icon="mdi-account-circle"
            :rules="userRules"
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            label="Mobile"
            v-model="mobile"
            type="text"
          ></v-text-field>
          <v-text-field
            label="Facebook"
            v-model="social_fb"
            prepend-icon="mdi-facebook"
          ></v-text-field>
            <v-text-field
            label="Instagram"
            v-model="social_it"
            prepend-icon="mdi-instagram"
          ></v-text-field>
            <v-text-field
            label="Fecha de nacimiento"
            v-model="user_birth"
            type="date"
          ></v-text-field>
          <v-text-field
            label="Box"
            v-model="box"
            prepend-icon="mdi-kettlebell"
          ></v-text-field>
             <v-col class="d-flex" cols="6">
            <v-select
              :items="items"
              label="Country"
              v-model="countrySelected"
              dense
              outlined
            ></v-select>
          </v-col>

        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text color="#25b535"  @click="signup">Signup</v-btn>
      </v-card-actions>

    </v-card>

  </div>
</template>

<script>
import API from "../Services/App";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be more than 8 characters"
      ],
      firstName: "",
      lastName: "",
      userRules: [v => !!v || "Username is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      mobile:"",
      social_fb:"",
      social_it:"",
      user_birth: "",
      box:"",
      countrySelected: "",
      items: ["Spain", "EEUU", "France","Germany","Engalnd","Irland","Italy","Venezuela","Colombia"]
    };
  },
  methods: {
    signup() {
      const newUser = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.userPassword,
        mobile: this.mobile,
        user_birth:this.user_birth,
        social_fb: this.social_fb,
        social_it: this.social_it,
        box:this.box,
        country:this.country
      };

      API.signup(newUser)
      console.log("signup")
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$root.$emit("login", true);
          this.$router.push("/");
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

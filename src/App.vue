<template>
  <v-app>
    <v-app-bar app color="white">
      <router-link to="/" class="home" >
        <div class="d-flex align-center">
          <v-img
            alt="Box logo"
            class="shrink mr-2"
            contain
            src="../public/logo.png"
            transition="scale-transition"
            width="75 "
          />
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/boxes" class="home">Box</router-link>
      <router-link to="/news" class="home">News</router-link>
      <router-link to="/crossfit" class="home">What's crossfit?</router-link>
      <router-link to="/blog" class="home">Ohana</router-link>

      <v-spacer></v-spacer>
      <router-link to="/auth" class="home" v-if="!signed">
        <v-icon>mdi-location-enter</v-icon>
      </router-link>
      <router-link to="/" class="home" v-else @click="logout">
        <v-icon @click="logout">mdi-exit-to-app</v-icon>
      </router-link>
      <router-link to="/profile" class="home">
        <v-icon>mdi-account</v-icon>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
<Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  data() {
    return {
      signed: false
    };
  },
  mounted() {
    this.$root.$on("login", status => {
      this.signed = status;
    });
  },
  methods: {
    logout() {
      localStorage.clear();
      this.signed = false;
      this.$router.push("/");
    }
  },
  components: {
    Footer
  }
};
</script>
<style>
.home {
  color: #25b535;
  margin-left: 5%;
  text-decoration: none;
  margin-right: 5%;
}
</style>

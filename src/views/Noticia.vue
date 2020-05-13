<template>
  <div>
    <router-link to="/news" class="linea"
      ><v-icon>mdi-arrow-left</v-icon></router-link
    >
    <v-card class="target" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
       :src="noticia.img"
      >
        <v-card-title>{{ noticia.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"
        >{{ noticia.date }}. {{ noticia.author }}</v-card-subtitle
      >
 <v-card-subtitle class="pb-0"
        >{{ noticia.description}}</v-card-subtitle
      >
    </v-card>
  </div>
</template>

<script>
import API from "../Services/App";

export default {
  data() {
    return {
      noticia: {}
    };
  },
  async created() {
    const noticia = await API.getNoticia(this.$route.params.id);
    this.noticia = noticia;
  }
};
</script>

<template>
  <div>
    <v-card class="target" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
       :src="box.img"
      >
        <v-card-title>{{ box.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"
        >{{ box.country }}. {{ box.province }}</v-card-subtitle
      >
 <v-card-subtitle class="pb-0"
        >Where you find us?{{ box.direction}}</v-card-subtitle
      >
      <v-card-text class="text--primary">The coaches:  {{box.coachs}}

      </v-card-text>

      <v-card-actions>
        <v-btn icon color="#25b535" to="#">
          <v-icon>mdi-portal-enter</v-icon>Try a class
        </v-btn>
        <v-btn icon color="#25b535">
          <v-icon class="iconoCorazon">mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <iframe
      id="mapa"
      title="Inline Frame Example"
      width="400"
      height="400"
      :src="box.google_map_embed_iframe"
    >
    </iframe>
  </div>
</template>

<script>
import API from "../Services/App";

export default {
  data() {
    return {
      box: {}
    };
  },
  async created() {
    const box = await API.getBox(this.$route.params.id);
    this.box = box;
  }
};
</script>

<style>
#mapa {
  float: right;
  margin-top: -415px;
  margin-right: 200px;
}

.target {
  margin-top: 95px;
  margin-left: 160px;
}

.linea {
  text-decoration: none;
  margin-left: 10px;
}
.iconoCorazon {
  margin-left: 400px;
}
</style>
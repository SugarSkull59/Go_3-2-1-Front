<template>
  <div>
    <h1 class="titulo">
Welcome to your crossfit corner, your ohana</h1>
    <div class="bienvenida">
      <p class="parrafo">
    Here you will find boxes that are around the world. They are within your reach, there are no excuses not to train and continue to meet colleagues
      </p>
    </div>
    <v-row class="mt-5">
      <v-col cols="8" offset="2">
        <div height="500px">
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src:
            "https://images.pexels.com/photos/376091/pexels-photo-376091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          src:
            "https://images.pexels.com/photos/2261476/pexels-photo-2261476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          src:
            "https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          src:
            "https://images.pexels.com/photos/2379613/pexels-photo-2379613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.titulo {
  color: #25b535;
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
}
.bienvenida {
  text-align: center;
  width: 800px;
  margin: auto;
  margin-top: 5px;
}
.parrafo {
  color: #25b535
}
</style>

<template>
<v-container mt-5>
<div  class="input-container">
    <v-icon>mdi-magnify</v-icon>
    <input type="text" placeholder="Country" v-model="country"/>
</div>

    <v-btn class="btnSearch" width="75px" small color="#7dee8a" @click="searchBox">Search</v-btn>

  <v-row >
    <v-col class="pa-0" v-for="(box, i) in boxes" :key="i" cols="12" sm="6" md="6" lg="6">
    <v-card class="mr-1 ml-1 mt-4 card"
              :height="$vuetify.breakpoint.smAndUp ? '650px' : ''"
              background="cover"
              hover
              >
        <v-col>
        <v-img :max-height="$vuetify.breakpoint.smAndUp ? '275px': ''" :class="$vuetify.breakpoint.mdAndUp ? 'cover-xs' : 'cover-xs'" :src="box.img" ><v-card-title :class="$vuetify.breakpoint.smAndDown ? 'title-head headline font-weight-bold' : 'title-head'">{{box.name}}</v-card-title></v-img>
        </v-col>
        <div :class="$vuetify.breakpoint.mdAndUp ? 'container-card' : ''">
        <v-card-subtitle :class="$vuetify.breakpoint.xsOnly ? 'title mt-n5' : 'title'">{{box.province}}  /  {{box.country}}</v-card-subtitle>
        </div>
          <v-card-actions class="mt-n2 mb-n3">
          <v-btn text color="cyan darken-4" outlined :href="box.social_fb" ><v-icon  size="30px" color="#25b535"
         >mdi-facebook</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn color="cyan darken-4" outlined :href="box.social_it"><v-icon size="30px" color="#25b535">mdi-instagram</v-icon></v-btn>
        </v-card-actions >
        <v-card-subtitle :class="$vuetify.breakpoint.smAndDown ? 'description headline font-weight-bold' : 'description'">{{box.description}}</v-card-subtitle>

         <v-btn text color="cyan darken-4" :to="{ name: 'Box', params: { id: box._id } }" >See more<v-icon  size="30px" color="#25b535"
         >mdi-dumbbell</v-icon></v-btn>
      </v-card>
    </v-col>
  </v-row>
  </div>
</div>
  <v-row justify="center">
  <v-btn max-height="25px" color="#25b535" class="mt-10 pr-1 pl-1" x-large @click="toTop" dark>Volver al principio <v-icon class="ml-3">mdi-arrow-up-circle</v-icon> </v-btn>
  </v-row>
</v-container>
</template>

<script>
import API from '../Services/App'
export default {
  data: () => ({
    boxes: Array,
    country:''

  }),
  methods: {
   async searchBox () {
      API.getAllBoxes(this.country)
      .then(response => (this.boxes = response)
      );
      await (this.country = '')
    },
    box(){
    API.getBox(`/boxes/${boxId}`);
    return response.data;
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  created () {
    API.getAllBoxes(this.country).then(
        response => (this.boxes = response))
    }
}
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid  #25b535;
  border-radius: 20px 20px 0 0 !important;
  background: rgb(224, 236, 238);
  text-align: center;
}
.cover-xs {
  border-radius: 20px 20px 0 0;
  max-height: 250px;

}
.title-head{
  color:#25b535;
  background: #7dee8a;;
  padding: 0px;
  justify-content: center;

}
.description {
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  overflow: hidden;
}
.description-sm {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 350px;
}


.input-container {
	border-radius: 5px;
	background: #f7d184;
  width: 50%;
  margin: auto;
  display: block;

}

.btnSearch {
  margin: auto;
  display: block;
}
</style>

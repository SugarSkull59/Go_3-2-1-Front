<template>
<v-container mt-5>
  <div  class="input-container">
    <v-icon>mdi-magnify</v-icon>
    <input type="text" placeholder="yyyy-mm-dd" v-model="date"/>
</div>
    <v-btn class="btnSearch" width="75px" small color="#7dee8a" @click="searchNews">Search</v-btn>

  <v-row >
    <v-col class="pa-0" v-for="(noticia, i) in news" :key="i" cols="12" sm="6" md="6" lg="12">
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-height="350"
  >
    <v-card-title>{{noticia.title}}</v-card-title>
    <v-card-text>
      <div class="my-4 subtitle-1">
      Date: {{noticia.date}}
      </div>

      <div>Source of information: {{noticia.author}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="#25b535"
        text
        :to="{ name: 'Noticia', params: { id: noticia._id } }"
      >Read more
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import API from '../Services/App'
export default {
  data: () => ({
    news: Array,
    date: null,
  }),
  methods: {
   async searchNews () {
      API.getAllNoticias(this.date)
      .then(response => (this.news = response)
      );
    await (this.date = '')


    },
    noticia(){
    API.getNoticia(`/news/${noticiaId}`);
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
    API.getAllNoticias(this.date)
    .then(response => (this.news = response))
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

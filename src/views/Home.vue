<template>
  <div class="home">
    <Carrusel msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carrusel from '@/components/Carrusel.vue'

export default {
  name: 'Home',
  components: {
    Carrusel
  }
}
</script>

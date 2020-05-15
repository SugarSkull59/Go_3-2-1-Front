import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boxes from '../views/Boxes.vue'
import Box from '../views/Box.vue'
import News from '../views/News.vue'
import Noticia from '../views/Noticia.vue'
import Crossfit from '../views/Crossfit.vue'
import Signup from '../views/Crossfit.vue'
import Auth from '../views/Auth.vue'
import Profile from '../views/EditProfile.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth
  },
  {
    path: '/boxes',
    name: 'Boxes',
    component: Boxes
  },
  {
    path: "/boxes/:id",
    name: "Box",
    component: Box
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/news/:id",
    name: "Noticia",
    component: Noticia
  },
  {
    path: "/crossfit",
    name: "Crossfit",
    component: Crossfit
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

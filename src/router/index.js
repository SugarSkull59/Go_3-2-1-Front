import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boxes from '../views/Boxes.vue'
import Box from '../views/Box.vue'
import News from '../views/News.vue'
import Noticia from '../views/Noticia.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

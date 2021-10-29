import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'

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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/About.vue')
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/Portfolio.vue')
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/Services.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/Contact.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

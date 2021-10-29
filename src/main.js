import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'animate.css';
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Bootstrap,
  render: function (h) { return h(App) }
}).$mount('#app')

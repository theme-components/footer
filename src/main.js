import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* Import components */
import App from './App.vue'
import Front from './components/Front.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'

var router = new VueRouter({
  hashbang: false,
  history: true
})

router.map({
  '/': {
    name: 'home',
    component: Front
  },
  '/footers': {
    name: 'footer-pack',
    component: Footer
  },
  '/cards': {
    name: 'card-pack',
    component: Card
  }
})

router.start(App, 'app')

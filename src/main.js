import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* Import components */
import App from './App.vue'
import Front from './components/Front.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Cart from './components/Cart.vue'

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
  '/headers': {
    name: 'header-pack',
    component: Header
  },
  '/cards': {
    name: 'card-pack',
    component: Card
  },
  '/carts': {
    name: 'cart-pack',
    component: Cart
  }
})

router.start(App, 'app')

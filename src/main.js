import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* Import components */
import App from './App'
import Front from './Front'
import Footer from './components/footer/Footer'

/* eslint-disable no-new */
new Vue({
  el: 'body'
})

var router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: Front
  },
  '/footer': {
    component: Footer
  }
})

router.start(App, '#app')

<template>
  <div id="app">
    <footer-1></footer-1>
    <footer-2></footer-2>
    <footer-3></footer-3>
    <footer-4></footer-4>
    <footer-laracast></footer-laracast>
    <footer-5></footer-5>
    <div class="container card-container">
        <card-1></card-1>
    </div>
  </div>
</template>
<script>
import 'bootstrap/scss/bootstrap-flex.scss'

import Footer1 from './components/footer1/Index.vue'
import Footer2 from './components/footer2/Index.vue'
import Footer3 from './components/footer3/Index.vue'
import Footer4 from './components/footer4/Index.vue'
import Footer5 from './components/footer5/Index.vue'
import FooterLaracast from './components/footer-laracast/Index.vue'
import Card1 from './components/card1/Index.vue'

import 'bootstrap/scss/bootstrap-reboot.scss'

export default {
  components: {
    'footer-1': Footer1,
    'footer-2': Footer2,
    'footer-3': Footer3,
    'footer-laracast': FooterLaracast,
    'footer-4': Footer4,
    'footer-5': Footer5,
    'card-1': Card1
  }
}
</script>

<style lang="scss">
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #app{
    width: 100%;
    .card-container{
      padding: 50px;
    }
  }
  footer{
    &+footer{
      margin-top: 60px;
    }
  }
</style>

<template>
  <div id="app">
    <footer-1></footer-1>
    <footer-2></footer-2>
    <footer-3></footer-3>
    <footer-4></footer-4>
    <footer-laracast></footer-laracast>
  </div>
</template>
<script>
import 'bootstrap/scss/bootstrap-flex.scss'

import Footer1 from './components/footer1/Index.vue'
import Footer2 from './components/footer2/Index.vue'
import Footer3 from './components/footer3/Index.vue'
import Footer4 from './components/footer4/Index.vue'
import FooterLaracast from './components/footer-laracast/Index.vue'

export default {
  components: {
    'footer-1': Footer1,
    'footer-2': Footer2,
    'footer-3': Footer3,
    'footer-4': Footer4,
    'footer-laracast': FooterLaracast
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
  }
  footer{
    &+footer{
      margin-top: 60px;
    }
  }

  /* Clear fix hack */
  .clearfix:after {
       visibility: hidden;
       display: block;
       font-size: 0;
       content: " ";
       clear: both;
       height: 0;
  }
  .clearfix { display: inline-block; }
  /* start commented backslash hack \*/
  * html .clearfix { height: 1%; }
  .clearfix { display: block; }
  /* close commented backslash hack */

  *, *:after, *:before {
    box-sizing: border-box;
  }
</style>

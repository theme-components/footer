<template>
  <div id="app">
    <footer-1></footer-1>
    <footer-2></footer-2>
    <footer-3></footer-3>
    <footer-4></footer-4>
  </div>
</template>
<script>
import 'bootstrap/scss/bootstrap-flex.scss'

import Footer1 from './components/footer1/Index.vue'
import Footer2 from './components/footer2/Index.vue'
import Footer3 from './components/footer3/Index.vue'
import Footer4 from './components/footer4/Index.vue'

export default {
  components: {
    'footer-1': Footer1,
    'footer-2': Footer2,
    'footer-3': Footer3,
    'footer-4': Footer4
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
</style>

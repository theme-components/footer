<template>
  <div id="app">
    <footer-1></footer-1>
    <footer-2></footer-2>
  </div>
</template>
<script>
import 'bootstrap/scss/bootstrap-flex.scss'
import Footer1 from './components/footer1/Index.vue'
import Footer2 from './components/footer2/Index.vue'

export default {
  components: {
    'footer-1': Footer1,
    'footer-2': Footer2
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

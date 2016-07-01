<template>
  <div class="footer-pack">
    <footer-1></footer-1>
    <footer-2></footer-2>
    <footer-3></footer-3>
    <footer-4></footer-4>
    <footer-laracast></footer-laracast>
    <footer-5></footer-5>
  </div>
</template>

<script>
  import Footer1 from './footer1/Index.vue'
  import Footer2 from './footer2/Index.vue'
  import Footer3 from './footer3/Index.vue'
  import Footer4 from './footer4/Index.vue'
  import Footer5 from './footer5/Index.vue'
  import FooterLaracast from './footer-laracast/Index.vue'

  export default {
    components: {
      'footer-1': Footer1,
      'footer-2': Footer2,
      'footer-3': Footer3,
      'footer-laracast': FooterLaracast,
      'footer-4': Footer4,
      'footer-5': Footer5
    }
  }
</script>

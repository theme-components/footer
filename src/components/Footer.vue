<template>
  <div class="footer-pack">
    <div class="item">
      <footer-1></footer-1>
    </div>
    <div class="item">
      <footer-2></footer-2>
    </div>
    <div class="item">
      <footer-3></footer-3>
    </div>
    <div class="item">
      <footer-4></footer-4></div>
    <div class="item">
      <footer-laracast></footer-laracast>
    </div>
  </div>
</template>

<script>
  import Footer1 from './footer/footer1/Index.vue'
  import Footer2 from './footer/footer2/Index.vue'
  import Footer3 from './footer/footer3/Index.vue'
  import Footer4 from './footer/footer4/Index.vue'
  import FooterLaracast from './footer/footer-laracast/Index.vue'

  export default {
    components: {
      'footer-1': Footer1,
      'footer-2': Footer2,
      'footer-3': Footer3,
      'footer-laracast': FooterLaracast,
      'footer-4': Footer4
    }
  }
</script>
<style lang="scss" scoped>
  .footer-pack{
    .item{
      & + .item{
        margin-top: 50px;
      }
    }
  }
</style>

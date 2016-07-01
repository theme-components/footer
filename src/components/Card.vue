<template>
  <div class="card-pack">
    <card-1></card-1>
  </div>
</template>

<script>
  import 'bootstrap/scss/bootstrap-reboot.scss'
  import Card1 from './card/card1/Index.vue'
  export default {
    components: {
      'card-1': Card1
    }
  }
</script>
<style lang="scss" scoped>
  .card-pack{
    padding: 50px;
  }
</style>

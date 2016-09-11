<template>
  <div class="card-pack">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <card-1></card-1>
        </div>
        <div class="col-md-4">
          <card-1></card-1>
        </div>
        <div class="col-md-4">
          <card-1></card-1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card1 from './card/card1/Index.vue'
  export default {
    components: {
      'card-1': Card1
    }
  }
</script>
<style lang="scss" scoped>
  @import "./../../node_modules/bootstrap/scss/bootstrap-flex.scss";
  .card-pack{
    padding: 50px 0;
  }
</style>

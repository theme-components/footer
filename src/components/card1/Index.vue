<template>
  <div class="image atvImg" id="atvImg__0" style="transform: perspective(960px);" @mousemove="processMovement"  @mouseenter="processEnter" @mouseleave="processExit" >
    <div class="atvImg-container">
      <div class="atvImg-shadow"></div>
      <div class="atvImg-layers">
        <div class="atvImg-rendered-layer layer-back" data-layer="0"></div>
        <div class="atvImg-rendered-layer layer-front" data-layer="1">Xin chafo</div>
      </div>
      <div class="atvImg-shine"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .atvImg {
    width: 320px;
    height: 190px;
    border-radius: 5px;
    transform-style: preserve-3d;
    -webkit-tap-highlight-color: rgba(#000,0);
  }

  .atvImg img {
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(14,21,47,0.25);
  }

  .atvImg-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: all 0.2s ease-out;
  }

  .atvImg-container.over .atvImg-shadow {
    box-shadow: 0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4);
  }

  .atvImg-layers {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .atvImg-rendered-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    background-size: cover;
    transition: all 0.1s ease-out;
  }
  .layer-back{
    background-image: url('assets/back.png');
  }
  .layer-front{
    background-image: url('assets/front.png');
  }

  .atvImg-shadow {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    transition: all 0.2s ease-out;
    box-shadow: 0 8px 30px rgba(14,21,47,0.6);
  }

  .atvImg-shine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: linear-gradient(135deg, rgba(255,255,255,.25) 0%,rgba(255,255,255,0) 60%);
  }
</style>
<script>
  import $ from 'jquery'

  export default{

    ready () {
      this.$container = $(this.$el).find('.atvImg-container')
      this.touchEnabled = 'ontouchstart' in window || navigator.msMaxTouchPoints
      this.$layers = $(this.$el).find('.atvImg-rendered-layer')
      this.$shine = $(this.$el).find('.atvImg-shine')
    },
    methods: {
      processEnter (elem) {
        this.$container.addClass('over')
      },
      processExit (elem) {
        this.$container.removeClass('over')
        this.$container.css('transform', '')
        this.$container.css('transform', '')
        for (var ly = 0; ly < this.$layers.length; ly++) {
          this.$layers[ly].style.transform = ''
        }
      },
      processMovement (e) {
        var d = document
        var bd = d.getElementsByTagName('body')[0]
        var htm = d.getElementsByTagName('html')[0]
        var elem = this.$container[0]
        var totalLayers = this.$layers.length
        var bdst = bd.scrollTop || htm.scrollTop
        var bdsl = bd.scrollLeft
        var pageX = (this.touchEnabled) ? e.touches[0].pageX : e.pageX
        var pageY = (this.touchEnabled) ? e.touches[0].pageY : e.pageY
        var offsets = elem.getBoundingClientRect()
        var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth // width
        var h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight // height
        var wMultiple = 320 / w
        var offsetX = 0.52 - (pageX - offsets.left - bdsl) / w // cursor position X
        var offsetY = 0.52 - (pageY - offsets.top - bdst) / h // cursor position Y
        var dy = (pageY - offsets.top - bdst) - h / 2 // @h/2 = center of container
        var dx = (pageX - offsets.left - bdsl) - w / 2 // @w/2 = center of container
        var yRotate = (offsetX - dx) * (0.07 * wMultiple) // rotation for container Y
        var xRotate = (dy - offsetY) * (0.1 * wMultiple) // rotation for container X
        var imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)' // img transform
        var arad = Math.atan2(dy, dx) // angle between cursor and center of container in RAD
        var angle = arad * 180 / Math.PI - 90 // convert rad in degrees
        // get angle between 0-360
        if (angle < 0) {
          angle = angle + 360
        }
        // container transform
        if (elem.className.indexOf(' over') !== -1) {
          imgCSS += ' scale3d(1.07,1.07,1.07)'
        }
        elem.style.transform = imgCSS
        // gradient angle and opacity for shine
        this.$shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst) / h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)')
        this.$shine.css('transform', 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px)')
        // parallax for each layer
        var revNum = totalLayers
        for (var ly = 0; ly < totalLayers; ly++) {
          this.$layers[ly].style.transform = 'translateX(' + (offsetX * revNum) * ((ly * 2.5) / wMultiple) + 'px) translateY(' + (offsetY * totalLayers) * ((ly * 2.5) / wMultiple) + 'px)'
          revNum--
        }
      }
    }
  }
</script>

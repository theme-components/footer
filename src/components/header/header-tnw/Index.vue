<template>
  <header class="header">
    <nav>
      <div class="nav-logo">
        <a href="#"><img src="assets/tnw.svg" alt=""></a>
      </div>
      <div class="nav-sub" role="navigation">
        <ul>
          <li><a href="#">News</a></li>
          <li><a href="#">Conference</a></li>
          <li><a href="#">Index</a></li>
          <li><a href="#">Deals</a></li>
          <li class="nav-sub-right"><a href="#">About</a></li>
          <li class="nav-sub-right"><a href="#">Team</a></li>
          <li class="nav-sub-right"><a href="#">Advertise</a></li>
          <li class="nav-sub-right"><a href="#">Jobs</a></li>
          <li class="nav-sub-right"><a href="#">Contact</a></li>
          </ul>
      </div>
      <div class="nav-main" role="navigation">
        <ul class="nav-sections">
          <li><a href="#">Apps</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="#">Tech</a></li>
          <li><a href="#">Creative</a></li>
          <li><a href="#">Money</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Launch</a></li>
          <li><a href="#">World</a></li>
          <li><a href="#">Distract</a></li>
          <li><a href="#">Offer</a></li>
        </ul>
        <ul class="nav-icons">
          <li>
            <a href="#" class="search-open">
              <i class="icon icon-search-dark"></i>
            </a>
          </li>
        </ul>
        <ul class="nav-follow">
          <li>
            <a href="#"><i class="icon icon-facebook-dark"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon icon-twitter-dark"></i></a>
          </li>
          <li class="nav-follow-extra">
            <ul>
              <li><a href="#"><i class="icon icon-google-dark"></i></a></li>
              <li><a href="#"><i class="icon icon-linkedin-dark"></i></a></li>
              <li><a href="#"><i class="icon icon-youtube-dark"></i></a></li>
              <li><a href="#"><i class="icon icon-instagram-dark"></i></a></li>
              <li><a href="#"><i class="icon icon-pinterest-dark"></i></a></li>
              <li><a href="#"><i class="icon icon-rss-dark"></i></a></li>
            </ul>
          </li>
          <li>
            <a href="#"><i class="icon icon-mail-dark"></i></a>
          </li>
          <li class="nav-follow-more" @click="showFollowExtra" v-if="isShowFollow == false">
            <a href="javascript:void(0)"><i class="icon icon-more-dark"></i></a>
          </li>
          <li class="nav-follow-less" @click="hideFollowExtra" v-if="isShowFollow">
            <a href="javascript:void(0)"><i class="icon icon-close"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import $ from 'jquery'
  import WebFont from 'webfontloader'
  WebFont.load({
    google: {
      families: ['Abel:400']
    }
  })
  export default {
    ready () {
      this.$followExtra = $(this.$el).find('.nav-follow-extra')
    },
    data () {
      return {
        isShowFollow: false
      }
    },
    methods: {
      showFollowExtra () {
        this.$followExtra.addClass('show')
        this.$set('isShowFollow', true)
      },
      hideFollowExtra () {
        this.$followExtra.removeClass('show')
        this.$set('isShowFollow', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    a, a:hover, a:active, a:focus {
      text-decoration: none;
    }
    nav {
      height: 80px;
      background: white;
      box-shadow: 0 0 32px rgba(0,0,0,.15);
      position: relative;
      padding-left: 106px;
    }
    .icon {
      background: url(assets/icons.svg) no-repeat;
      background-size: 48px 352px;
      height: 16px;
      width: 16px;
      display: block;
    }
    .icon-facebook-dark {
      background-position: -16px -176px;
    }
    .icon-twitter-dark {
      background-position: -16px -208px;
    }
    .icon-mail-dark {
      background-position: -16px -48px;
    }
    .icon-google-dark {
      background-position: -16px -224px;
    }
    .icon-linkedin-dark {
      background-position: -16px -288px;
    }
    .icon-youtube-dark {
      background-position: -16px -240px;
    }
    .icon-instagram-dark {
      background-position: -16px -256px;
    }
    .icon-pinterest-dark {
      background-position: -16px -272px;
    }
    .icon-rss-dark {
      background-position: -16px -160px;
    }
    .icon-more-dark {
      background-position: -16px 0;
    }
    .icon-search-dark {
      background-position: -16px -16px;
    }
    .icon-close {
      position: relative;
      background: 0 0;
      &:before, &:after {
        background-color: #000;
        content: '';
        height: 2px;
        margin-top: -1px;
        position: absolute;
        top: 50%;
        width: 16px;
      }
      &:before {
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &:after {
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
    .nav-logo {
      position: absolute;
      top: 0;
      left: 0;
      >a {
        background-color: #F42;
        background: -webkit-linear-gradient(left top,#C09,#F42 85%);
        background: -moz-linear-gradient(bottom right,#C09,#F42 85%);
        background: -o-linear-gradient(bottom right,#C09,#F42 85%);
        background: linear-gradient(to bottom right,#c09,#f42 85%);
        display: block;
        height: 80px;
        padding: 16px 20px;
        width: 106px;
        will-change: height;
        &:hover {
          background: url(assets/home-1.gif) no-repeat;
        }
        img {
          transform: translateY(16px);
          display: block;
          height: 16px;
          position: relative;
          width: 66px;
          will-change: transform;
          z-index: 999;
        }
      }
    }
    .nav-sub {
      background: #131313;
      display: block;
      font-size: 13px;
      line-height: 32px;
      &:after {
        content: "";
        clear: both;
        display: table;
      }
      li {
        float: left;
        margin-left: 12px;
        a {
          color: rgba(255,255,255,.6);
          &:hover {
            color: #fff;
          }
        }
        &:first-child {
          margin-left: 20px;
        }
        &.nav-sub-right {
          float: right;
          margin-left: 0;
          margin-right: 12px;
        }
      }
    }
    .nav-main {
      .nav-sections {
        li {
          float: left;
        }
        a {
          font-weight: 500;
          text-transform: uppercase;
          color: #AAA;
          display: block;
          height: 48px;
          letter-spacing: .04em;
          line-height: 1;
          padding: 17px 8px 0;
          font-family: 'Abel', sans-serif;
          &:hover {
            color: #000;
          }
          &:first-child {
            padding-left: 20px;
          }
        }
      }
      .nav-follow, .nav-icons {
        float: right;
      }
      .nav-follow {
        li {
          float: left;
          a {
            display: block;
            height: 48px;
            opacity: .25;
            padding: 16px 0 0 8px;
            width: 32px;
            will-change: opacity;
            &:hover {
              opacity: .6;
            }
          }
        }
        .nav-follow-extra {
          -moz-transition: width .4s ease;
          -o-transition: width .4s ease;
          -webkit-transition: width .4s ease;
          transition: width .4s ease;
          overflow: hidden;
          width: 0;
          height: 48px;
          &.show {
            width: 224px;
          }
        }
      }
      .nav-icons {
        li {
          border-left: 1px solid #EEE;
          a {
            display: block;
            height: 48px;
            opacity: .25;
            padding: 16px;
            width: 48px;
            will-change: opacity;
            &:hover {
              opacity: .6;
            }
          }
        }
      }
    }
  }
</style>
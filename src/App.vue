<template>
  <div id="app">
    <div id="main-navigation">
      <h1 class="logo">
        <a v-link="{ path: '/' }">Vue Component Pack</a>
      </h1>
      <nav>
        <ul>
          <li><a v-link="{ path: '/' }">Home</a></li>
          <li><a v-link="{ path: '/footer' }">Footer Pack</a></li>
          <li><a v-link="{ path: '/header' }">Header Pack</a></li>
          
        </ul>
      </nav>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import WebFront from 'webfontloader'
  WebFront.load({
    google: {
      families: ['Lato:400,700']
    }
  })
  import 'bootstrap/scss/bootstrap-flex.scss'
  import 'bootstrap/scss/bootstrap-reboot.scss'
</script>

<style lang="scss">
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lato", sans-serif !important;
  }

  #app{
    width: 100%;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
  }

  /* MAIN NAVIGATION */
  #main-navigation {
    padding: 0 15px;
    background: #212121;
    .logo {
      float: left;
      margin-top: 10px;
      a {
        color: #fff;
        font-weight: 700;
        font-size: .9em;
      }
    }
    nav {
      ul {
        display: flex;
        justify-content: flex-end;
        flex-flow: row wrap;
        list-style: none;
        li {
          a {
            display: inline-block;
            padding: 20px;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;
            &:hover {
              color: #00ACC1;
            }
          }
          &.active a {
             color: #00ACC1;
          }
        }
      }
    }
  }

  footer{
    &+footer{
      margin-top: 60px;
    }
  }
</style>

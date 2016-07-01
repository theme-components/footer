<template>
    <footer class="footer">
        <div class="inner">
            <nav class="links">
                <ul>
                    <li><a href="/codrops/category/tutorials/">Tutorials</a></li>
                    <li><a href="/codrops/category/articles/">Articles</a></li>
                    <li><a href="/codrops/category/playground/">Playground</a></li>
                    <li><a href="/codrops/category/blueprints/">Blueprints</a></li>
                    <li><a href="/codrops/css_reference/">CSS Reference</a></li>
                </ul>
                <ul>
                    <li><a href="/codrops/category/news/">News</a></li>
                    <li><a href="/codrops/category/giveaways/">Giveaways</a></li>
                    <li><a href="/codrops/category/freebies/">Freebies</a></li>
                    <li><a href="/codrops/collective/">Collective</a></li>
                </ul>
                <ul>
                    <li><a href="/codrops/about/">About</a></li>
                    <li><a href="/codrops/contact/">Contact</a></li>
                    <li><a href="/codrops/archives/">Archives</a></li>
                    <li><a href="/codrops/deals/">Deals</a></li>
                    <li><a href="/codrops/advertise/">Advertise</a></li>
                </ul>
                <ul>
                    <li><a href="/codrops/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="/codrops/licensing/">License</a></li>
                    <li><a href="/codrops/credits/">Credits</a></li>
                    <li><a href="/codrops/impressum/">Impressum</a></li>
                </ul>
            </nav>
            <div class="logos">
                <div class="copyright logo">
                    <span>© Codrops 2016 by</span>
                    <a href="http://tympanus.net/" title="Tympanus">Tympanus</a>
                </div>
                <div class="cdn logo">
                    <span>Content delivered by</span>
                    <a href="http://tracking.maxcdn.com/c/24359/3982/378?u=http%3A%2F%2Fwww.maxcdn.com%2Fcodrops%2F" title="Content Distribution Network" target="blank">Content Distribution Network</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
  import 'bootstrap/scss/_reboot.scss'
  import WebFont from 'webfontloader'
  WebFont.load({
    google: {
      families: ['Montserrat:400,700']
    }
  })
  export default{}
</script>
<style lang="scss" scoped>
  footer {
    padding: 40px 0;
    width: 100%;
    background: #30abd5;
    font-family: 'Montserrat', sans-serif;
    .inner {
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .links {
        flex-grow: 4;
        display: flex;
        ul {
          display: inline-block;
          flex: 0 0 auto;
          width: 25%;
          margin: 0;
          padding: 0;
          list-style: none;
          li {
            display: block;
            line-height: 25px;
            a {
              color: #fff;
              text-decoration: none;
              white-space: nowrap;
              font-size: 16px;
              &:hover {
                color: #056495;
              }
            }
          }
        }
      }
      .logos {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        .logo {
          width: 155px;
          height: 72px;
          & + .logo {
            margin-left: 20px;
          }
          span {
            color: #237dac;
            font-size: 13px;
          }
          a {
            display: block;
            outline: none;
            text-indent: -9000px;
          }
          &.copyright {
            a {
              width: 145px;
              height: 36px;
              background: transparent url(assets/cs.png) no-repeat 0 -456px;
            }
          }
          &.cdn {
            a {
              margin-top: 8px;
              width: 106px;
              height: 18px;
              background: transparent url(assets/cs.png) no-repeat 0 -588px;
            }
          }
        }
      }
    }
  }
</style>

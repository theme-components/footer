<template>
  <footer class="footer">
    <div class="first-row">
      <ul class="linkboxs">
        <li class="linkbox">
          <h3 class="title">Kết nối</h3>
          <ul class="link-list">
            <li class="link-item"><a href="#">Blog</a></li>
            <li class="link-item"><a href="#">Facebook</a></li>
            <li class="link-item"><a href="#">Google+</a></li>
            <li class="link-item"><a href="#">Medium</a></li>
            <li class="link-item"><a href="#">Twitter</a></li>
            <li class="link-item"><a href="#">Youtube</a></li>
          </ul>
        </li>
        <li class="linkbox">
          <h3 class="title">Chương trình</h3>
          <ul class="link-list">
            <li class="link-item"><a href="#">Women Techmakers</a></li>
            <li class="link-item"><a href="#">Agency Program</a></li>
            <li class="link-item"><a href="#">Google Developer Groups</a></li>
            <li class="link-item"><a href="#">Google Developer Experts</a></li>
            <li class="link-item"><a href="#">Startup Launchpad</a></li>
          </ul>
        </li>
        <li class="linkbox">
        <h3 class="title">Developer Consoles</h3>
        <ul class="link-list">
          <li class="link-item"><a href="#">Google API Console</a></li>
          <li class="link-item"><a href="#">Google Play Developer Console</a></li>
          <li class="link-item"><a href="#">Firebase Console</a></li>
          <li class="link-item"><a href="#">Cast SDK Developer Console</a></li>
          <li class="link-item"><a href="#">Chrome Web Store Dashboard</a></li>
        </ul>
      </li>
        <li class="linkbox dark">
          <a class="logo-link"><img class="logo" src="assets/logo.svg"></a>
          <ul class="link-list">
            <li class="link-item"><a href="#">Android</a></li>
            <li class="link-item"><a href="#">Chrome</a></li>
            <li class="link-item"><a href="#">Firebase</a></li>
            <li class="link-item"><a href="#">Google Cloud Platform</a></li>
            <li class="link-item"><a href="#">Tất cả sản phẩm</a></li>
          </ul>
        </li>

      </ul>
    </div>
    <div class="last-row">
      <nav class="footer-nav">
        <span class="nav-link"><a href="https://developers.google.com/site-terms/">Điều khoản</a><a href="https://www.google.com/intl/en/privacy/" class="gc-analytics-event" data-category="Site-Wide Custom Events" data-label="Footer Privacy Link">Bảo mật</a></span>
      </nav>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
    .first-row{
      font: 14px/16px Roboto,sans-serif;
      .linkboxs{
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        .linkbox{
          display: inline-block;
          flex: 0 0 auto;
          margin: 0;
          padding: 24px 40px 40px;
          text-align: left;
          vertical-align: top;
          width: 25%;
          background: #303c42;
          &.dark{
            background: #37424b;
          }
          .title{
            color: #fff;
            font: 500 14px/16px Roboto,sans-serif;
            margin: 0 0 16px;
          }
          .logo-link{
            border-bottom: 1px solid #455a64;
            display: block;
            margin: 0 -40px 24px;
            padding: 0 40px 17px;
            .logo{
              margin: -5px 0 0 -3px;
              max-width: 260px;
              width: 100%;
            }
          }
          ul.link-list{
            list-style-type: none;
            padding: 0;
            margin: 0;
            .link-item{
              margin: 16px 0;
              &:last-child{
                margin-bottom: 0;
              }
              a{
                color: #cfd8dc;
                text-decoration: none;
                &:hover{
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    .last-row{
      background: #455a64;
      nav{
        font-size: 13px;
        color: #fff;
        overflow: auto;
        padding: 14px 24px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .nav-link{
          a{
            color: #fff;
            line-height: 36px;
            text-decoration: none;
            &+a{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
</style>

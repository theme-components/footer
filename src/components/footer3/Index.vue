<template>
  <footer class="footer">
    <nav class="footer">
        <div class="left">
          <div class="copy">© COPYRIGHT 2010-16</div>
        </div>
        <div class="right">
          <ul>
            <li><a href="/about-us/">About us</a></li>
            <li><a href="/about-evaluation/">Evaluation System</a></li>
            <li><a href="/terms/">Legal terms</a></li>
            <li><a href="/contact-us/">Contact us</a></li>
            <li><a href="https://awwwards.desk.com/">Help</a></li>
          </ul>
        </div>
    </nav>
  </footer>
</template>

<script>
  import 'bootstrap/scss/bootstrap-flex.scss'
  export default {}
</script>

<style lang="scss" scoped>
  footer {
    nav.footer{
      padding: 30px;
      background: #202121;
      font-size: 14px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        .copy{
          padding-left: 60px;
          background: url(assets/logo.svg) no-repeat;
          background-size: 53px 14px;
        }
      }
      .right{
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
          li{
            display: inline-block;
            text-transform: uppercase;
            font-weight: bold;
            font-family: 'Roboto',serif;
            &+li{
              border-left: 1px solid #333;
              margin-left: 15px;
              padding-left: 15px;
            }
            a{
              color: #555;
              text-decoration: none;
              &:hover{
                color: #888;
              }
            }
          }
        }
      }
    }
  }
</style>

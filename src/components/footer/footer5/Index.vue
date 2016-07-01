<template>
  <footer class="page-footer">
    <nav class="other-nav">
      <ul>
        <li><a href="#newsletter">Newsletter</a></li>
        <li><a href="/pages/terms-and-conditions">Terms and conditions</a></li>
        <li><a href="/pages/cookies">Cookies</a></li>
      </ul>
    </nav>
    <a href="#top" class="to-top-button action-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22">
        <path fill="#585858" d="M6 0L0 6h5v16h2V6h5L6 0z"></path>
      </svg>
    </a>
    <nav class="payment-methods">
      <h3>Accepted payment methods</h3>
      <ul>
        <li><span class="payment-icon dankort"></span></li>
        <li><span class="payment-icon visa"></span></li>
        <li><span class="payment-icon visaelectron"></span></li>
        <li><span class="payment-icon mastercard"></span></li>
        <li><span class="payment-icon amex"></span></li>
      </ul>
    </nav>
  </footer>
</template>
<script>
  import 'bootstrap/scss/bootstrap-reboot.scss'
  export default{}
</script>
<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    height: 80px;
    padding: 0 50px;
    color: #585858;
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        display: inline-block;

      }
    }
    .other-nav{
      ul {
        li{
          &+li{
            margin-left: 20px;
          }
          a {
            color: #585858;
            font-size: 14px;
            line-height: 20px;
            text-decoration: none;
            &:hover{
              opacity: .6;
            }
          }
        }

      }
    }
    .payment-methods{
      display: flex;
      justify-content: center;
      align-items: center;
      h3{
        font-size: 14px;
        line-height: 20px;
        color: #585858;
        display: inline-block;
        margin: 0 20px 0 0;
      }
      ul{
        line-height: 0;
        .payment-icon{
          display: block;
          width: 30px;
          height: 20px;
          line-height: 1;
          background: no-repeat center center;
          background-size: 100%;
        }
        .dankort{
          background-image: url(assets/paymenticon5@2x.png);
        }
        .visa{
          background-image: url(assets/paymenticon1@2x.png);
        }
        .visaelectron{
          background-image: url(assets/paymenticon7@2x.png);
        }
        .mastercard{
          background-image: url(assets/paymenticon6@2x.png);
        }
        .amex{
          background-image: url(assets/paymenticon2@2x.png);
        }
      }
    }
    .to-top-button{
      height: 100%;
      background: #f4f4f4;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      &:hover{
        opacity: .6;
      }
    }
  }
</style>

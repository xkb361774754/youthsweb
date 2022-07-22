<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-content-item">
            <p class="social-icons">
              <a class="social-icon" target="_blank" href="#"><span class="fa fa-facebook"></span></a>
              <a class="social-icon" target="_blank" href="#"><span class="fa fa-twitter"></span></a>
              <a class="social-icon" target="_blank" href="#"><span class="fa fa-weibo"></span></a>
              <a class="social-icon" target="_blank" href="#"><span class="fa fa-wechat"></span></a>
            </p>
            <p class="bold">EMAIL : contact@youthf.com</p>
          </div>
          <div class="footer-content-item right">
            <p v-if="!isEnglish" class="bold">新加坡<span class="dot"></span>中国<span
                class="dot"></span>美国<span class="dot"></span>马来西亚<span class="dot"></span>印度</p>
            <p v-else class="bold">SG<span class="dot"></span>China<span
              class="dot"></span>US<span class="dot"></span>Malaysia<span class="dot"></span>India</p>
            <p class="copyright">Copyright © 2021 HONGFENG TECHNOLOGY, All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import isEnglish from './isEnglish.js'
export default {
  name: 'FooterName',
  mixins: [isEnglish]
}

</script>

<style scoped>

.site-footer {
  padding-bottom: 80px;
}

.container {
    max-width: 1440px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.footer-content {
    border-top: 1px solid #aaa;
    padding-top: 80px;
    display: flex;
    font-size: 14px;
}

.footer-content-item {
    width: 50%;
}


.footer-content-item.right {
    text-align: right;
}


.social-icons a{
  color: #000
}
.social-icons, .footer-content-item p:first-child  {
  margin-bottom: 40px;
}

.social-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 60px;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.social-icons .fa {
    font-size: 20px;
}

.fa:before {
    content: "\f09a";
}

.bold .dot {
    font-weight: 100;
    color: #cfcfcf;
}

.copyright {
    color: #cfcfcf;
}

@media (max-width: 600px) {
.footer-content {
    text-align: center;
    flex-wrap: wrap;
    padding-top: 60px;
}

.footer-content-item {
    width: 100%;
}

.footer-content p {
    margin-bottom: 40px;
}

.footer-content-item.right {
    overflow-x: scroll;
}

.footer-content-item.right {
    text-align: center;
}

.footer-content-item {
    width: 100%;
}

.site-footer {
  padding-bottom: 40px;
}
}

</style>
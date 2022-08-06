<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div v-if="!isEnglish" class="footer-content-item">
            <p class="bold" :style="{marginBottom: '0px'}">联系方式 : invest@youthf.com.cn</p>
            <p class="bold">中青弘丰（厦门）投资有限公司</p>
            <p class="bold">地址：厦门市思明区中航紫金广场</p>
          </div>
          <div v-else class="footer-content-item">
            <p class="bold" :style="{marginBottom: '0px'}">Contact information : invest@youthf.com.cn</p>
            <p class="bold">Zhongqing HongFeng (Xiamen) Investment Co., LTD</p>
            <p class="bold">Address: Zijin Plaza, Siming District, Xiamen</p>
          </div>
          <div class="footer-content-item right">
            <p class="copyright">Copyright © 2022 ZhongQing HongFeng, All rights reserved</p>
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

.bold {
  line-height: 1.6;
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
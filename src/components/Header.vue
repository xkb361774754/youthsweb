<template>
  <!-- 首页头部banner模块 -->
  <div class="banner">
    <div class="header">
      <img 
        src="../assets/logo_hf.png"
        class="logo"
      />
      <div class="menu" @click="clickEnglish">
        <span v-if="!isEnglish">英文</span>
        <span v-else>CN</span>
      </div>
    </div>
    <div class="banner-content">
      <canvas id="waves" width="100vw" height="150"/>
      <div class="container"> 
        <h2 v-if="!isEnglish">让未来触手可及</h2>
        <h2 v-else>Bring the future within reach</h2>
        <p v-if="!isEnglish">
          投资 <span class="dot" /> 研究 <span class="dot" /> 咨询
        </p>
        <p v-else>
          Investment <span class="dot" /> Research <span class="dot" /> Advisory
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import isEnglish from './isEnglish.js'
export default {
    name: 'HeaderName',
    mixins: [isEnglish]
}
</script>
<style scoped>
.banner {
    background-image: url("../assets/banner.png");
    background-size: cover;
    background-position: center;
    /* width: 100%; */
    /* height: 50vh; */
}
.header {
  line-height: 100px;
  height: 100px;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.logo {
  width: 240px;
  height: 30px;
}
.menu {
  color: #FFF;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .menu-item:after{
  display: block;
  width: 20px;
  height: 4px;
  background-color: #fff;
  content: "";
  margin-top: -30px;
} */

.banner-content {
  color: #fff;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 120px;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 200;
  position: relative;
  overflow: hidden;
}

#waves {
  width: 100vw;
  height:150px;
  bottom: 0;
  left: -300px;
  position: absolute;
  right: 0;
  top: 50px;
}
.banner-content h2 {
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 30px;
}

.container{
  max-width: 1440px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  color: #FFF;
}


/* 适配手机端 */

@media (max-width: 600px) {
.header {
  height: 80px;
  line-height: 80px;
}

.logo {
  padding-top: 12px;
  width: 100px;
}

.banner-content {
  padding-top: 100px;
  font-size: 14px;
  padding-bottom: 100px;
}
.banner-content h2 {
  font-size: 18px;
}

}
</style>
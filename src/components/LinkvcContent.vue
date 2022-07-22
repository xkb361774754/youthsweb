<template>
  <!-- 首页内容模块 youthf 内容  -->
  <div >
    <section class="captor">
      <div class="container bkgimg">
        <h2 v-if="!isEnglish" class="captor-title">企业文化</h2>
        <h2 v-else class="captor-title">Enterprise Culture</h2>
        <div class="mobile-text">
          <p v-if="!isEnglish">愿景：豐民立志、弘毅致遠</p>
          <p v-else>Vision: Make everyday life more prosperous and inspirating for everyone</p>
          <br />
          <br />
          <p v-if="!isEnglish">使命：让未来触手可及</p>
          <p v-else>Mission: Bring the future within reach</p>
          <br />
          <br />
          <p v-if="!isEnglish">价值观：共识 · 创造 · 分享 · 利他</p>
          <p v-else>Values: Cooperation · Creation · Commitment · Altruism</p>
        </div>
      </div>
    </section>
    <section class="captor">
      <div class="container">
        <h2 v-if="!isEnglish" class="captor-title">投资板块</h2>
        <h2 v-else class="captor-title">Investment sector</h2>
        <div class="mobile-text">
          <p v-if="!isEnglish">物业不动产，供应链相关，大消费，高新科技</p>
          <p v-else>Real estate , Supply chain, Big consumption, Technology</p>
          <br />
        </div>
      </div>
    </section>
    <section class="captor">
      <div class="container">
        <h2 v-if="!isEnglish" class="captor-title">过往投资项目</h2>
        <h2 v-else class="captor-title">Past Investment Projects</h2>
        <div class="partner-content">
          <div class="">
            <div class="imgWrap">
              <img class="favoo" src="../assets/oldamerican_legend.png">
            </div>
            <p v-if="!isEnglish">老美往事 OLDAMERICAN  LEGEND</p>
            <p v-else>OLDAMERICAN  LEGEND</p>
          </div>
          <div class="">
            <div class="imgWrap">
              <img class="favoo" src="../assets/BBB.png">
            </div>
            <p v-if="!isEnglish">BBB德国精酿餐厅 </p>
            <p v-else>Bavarian Brew Restaurant</p>
          </div>
          <div class="">
            <div class="imgWrap">
              <img class="favoo" src="../assets/xiamenshilijia.png">
            </div>
            <p v-if="!isEnglish">厦门食力家食品科技有限公司</p>
            <p v-else>XiaMen ShiLiJia Food Technology Co., LTD</p>
          </div>
          <div class="">
            <div class="imgWrap">
              <img class="favoo" src="../assets/DreamHeaven.png" />
            </div>
            <p v-if="!isEnglish">厦门梦天堂网络技术有限公司</p>
            <p v-else>Dream Heaven Co.，LTD</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import isEnglish from './isEnglish.js'
export default {
  name: "LinkvcContent",
    mixins: [isEnglish]
}
</script>
<style scoped>
.bkgimg {
  background-image: url(../assets/aboutbg.png);
  background-position: right center;
  background-repeat: no-repeat;
}
.captor {
    padding-bottom: 100px;
    padding-top: 100px;
}

.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  text-align: left;
}
.captor-title {
  font-size: 28px;
}
.captor-title:after {
    margin-top: 20px;
    content: "";
    display: block;
    width: 32px;
    height: 6px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(68,129,235,1) 0%, rgba(4,190,254,1) 100%);
    box-shadow: 0 15px 25px rgb(68 125 235 / 60%);
}

.mobile-text {
    padding-top: 40px;
    line-height: 1.6;
    width: 50%;
    font-weight: 200;
}


.partner-content {
    padding-top: 60px;
    display: flex;
    flex-wrap: wrap;
}

.partner-content >  div {
    box-sizing: border-box;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-between; */
    height: 220px;
    width: 25%;
}

.partner-content p {
  text-align: center;
}

.imgWrap {
  height: 200px;
  display: flex;
}
.partner-content img {
    display: block;
    width: 160px;
    margin:  auto;
}
@media (max-width: 600px) {
.captor {
    padding-top: 60px;
    padding-bottom: 60px;
}

.captor-title {
    font-size: 20px;
}

.mobile-text {
    width: 90%;
}

.partner-content {
    padding-top: 60px;
}


.partner-content > div {
  width: 50%;
  height: 180px;
}

.partner-content  p {
  font-size: 12px;
}

.partner-content .imgWrap {
  text-align: center;
  height: 130px!important;
}

.partner-content img {
    max-width: 80px;
    height: auto;
}

}

</style>
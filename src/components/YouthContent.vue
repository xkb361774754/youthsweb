<template>
  <!-- 首页内容模块 youthf 内容  -->
  <div>
    <section class="captor about bkgimg">
      <div v-if="!isEnglish" class="container">
        <h2 class="captor-title">关于我们</h2>
        <div class="mobile-text">弘丰科技是一家面向全球市场，专注于工业机器人、智慧供应链等前沿领域的 IT 咨询、解决方案与服务提供商，依托人工智
          能、大数据、区块链、元宇宙等新一代信息技术，打造了一批具有创新性的产品和解决方案，为全球客户的数字化转型提供智能、高效的全方位服务。
          弘丰科技及其核心技术关联企业总部位于新加坡，在中国、美国、马来西亚、印度等设有 10 余家分支机构、研发中心。弘丰科技及其核心技术关联企业先后获得“亚太地区最具创新元宇宙
          科技公司”等奖项，且凭借多年的行业积累、深厚的行业专长和成熟的行业实践、国际化的精英团队和完善的人才管理、完备的全球化交付与服务网络，以及无处不在的创新精神与实践，助力
          全球客户尽享科技革新所带来的卓越运营价值。</div>
      </div>
      <div v-else class="container">
        <h2 class="captor-title">ABOUT US</h2>
        <div class="mobile-text">Hongfeng Technology is a leading global IT consulting, 
          solution and service provider focusing on Industrial Robots, 
          Intelligent Supply Chains and other cutting-edge fields, based on AI, 
          Big Data, Blockchain, Metaverse and other new generation technologies. 
          From our headquarter in Singapore all the way to branches and R&D centers in China,
          the United States, Malaysia, and India, 
          we are dedicated to assisting our global customers achieve higher operating efficiency thru our global talent management and delivery services. 
        </div>
      </div>
    </section>
    <section class="captor">
      <div v-if="!isEnglish" class="container">
        <h2 class="captor-title">企业文化</h2>
        <div class="mobile-text">
          <p>愿景：豐民立志、弘毅致遠</p>
          <br />
          <p>使命：让未来科技触手可及</p>
          <br />
          <p>价值观：共识 · 创造 · 分享 · 利他</p>
        </div>
      </div>
      <div v-else class="container">
        <h2 class="captor-title">Vison, Mission and Values Statements</h2>
        <div class="mobile-text">
          <p>Vision: Make everyday life more prosperous and inspirating for everyone</p>
          <br />
          <p>Mission: Bring the future technology within reach</p>
          <br />
          <p>Values: Cooperation · Creation · Commitment · Altruism</p>
        </div>
      </div>
    </section>
    <section class="captor">
      <div class="container">
        <h2 v-if="!isEnglish" class="captor-title">关联企业</h2>
        <h2 v-else class="captor-title">Partners & Affiliates</h2>
        <div class="partner-content">
          <div class="">
            <a href="http://www.myrlabs.com" target="_blank">
              <img class="favoo" src="../assets/logo_myrlabs_dark.svg">
            </a>
          </div>
          <div class="">
            <a href="http://www.broctagon.com/" target="_blank">
              <img class="favoo" src="../assets/logo_broctagon.png">
            </a>
          </div>
          <div class="">
            <a href="http://www.linkvc.com/" target="_blank">
              <img class="favoo" src="../assets/logo_linkvc_bright.jpg">
            </a>
          </div>
          <div class="">
            <a href="https://glink.games" target="_blank">
              <img class="favoo" src="../assets/logo_glink_br_ondark.png" />
            </a>
          </div>
          <div class="">
            <a href="https://silversea-media.com" target="_blank">
              <img class="favoo" src="../assets/logo_silversea_br_onwhite.png" />
            </a>
          </div>
          <div class="">
            <a href="https://www.ai2labs.com/" target="_blank">
              <img class="favoo" src="../assets/logo_ai2labs_bright.png">
            </a>
          </div>
          <div class="">
            <a href="https://www.vishanti.ai/" target="_blank">
              <img class="favoo" src="../assets/logo_vishanti_onblack.png">
            </a>
          </div>
          <div class="">
            <a href="https://www.affinityanalyst.com/" target="_blank">
              <img class="favoo" src="../assets/logo_affinityanalyst_onblack.png">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import isEnglish from './isEnglish.js'
export default {
  name: "YouthContent",
  mixins: [isEnglish]
}
</script>
<style scoped>
.captor {
    padding-bottom: 100px;
    padding-top: 100px;
}

.bkgimg {
  background-image: url(../assets/aboutbg.png);
  background-position: right center;
  background-repeat: no-repeat;
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

.partner-content div {
  box-sizing: border-box;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100px;
  width: 20%;
}


.partner-content img {
    width: 160px;
    height: auto;
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


.partner-content div {
    width: 33.333%;
    height: 70px;
}

.partner-content img {
    max-width: 80px;
    height: auto;
}

}

</style>
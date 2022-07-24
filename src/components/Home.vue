<template>
  <div>
      <HeaderName @changeEnglish="changeEnglish" :isEnglish="isEnglish" />
      <ContentName @changeEnglish="changeEnglish" :isEnglish="isEnglish" />
      <FooterName @changeEnglish="changeEnglish" :isEnglish="isEnglish" />
  </div>
</template>

<script>
import HeaderName from './Header.vue'
// import ContentName from './YouthContent.vue'
import ContentName from './LinkvcContent.vue'
// import FooterName from './Footer.vue'
import FooterName from './FooterLinkvc.vue'
export default {
  name: 'HelloWorld',
  components: {
    HeaderName,
    ContentName,
    FooterName
  },
  data() {
    return {
      isEnglish: false
    }
  },
  methods: {
    changeEnglish(isEnglish) {
      this.isEnglish = isEnglish;
      if(isEnglish) {
        document.title = 'EN | HongFeng - Bring the future technology within reach'
      } else {
        document.title = 'CN | 弘丰科技-让未来科技触手可及'
      }
    }
  }
}
</script>


<style scoped>

</style>

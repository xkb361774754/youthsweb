<template>
  <div>
      <HeaderName @changeEnglish="changeEnglish" :isEnglish="isEnglish" />
      <ContentName @changeEnglish="changeEnglish" :isEnglish="isEnglish" />
      <FooterName @changeEnglish="changeEnglish" :isEnglish="isEnglish" />
  </div>
</template>

<script>
import HeaderName from './Header.vue';
import ContentName from './LinkvcContent.vue';
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
        document.title = 'EN | HongFeng Investment - Bring the future within reach'
      } else {
        document.title = 'CN | 弘丰投资-让未来触手可及'
      }
    }
  }
}
</script>


<style scoped>

</style>

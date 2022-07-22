var isEnglish = {
  props: {
    "isEnglish": {
      type: Boolean
    }
  },
  methods: {
    clickEnglish() {
      this.$emit("changeEnglish", !this.isEnglish)
    }
  }
}

export default isEnglish;
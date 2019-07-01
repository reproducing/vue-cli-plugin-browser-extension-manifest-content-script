<template>
  <p>{{ defaultText }}</p>
</template>

<script>

export default {
  data () {
    return {}
  },
  mounted () {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage('extName');
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>

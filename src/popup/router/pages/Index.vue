<template>
  <h1>{{ defaultText }}</h1>
</template>

<script>

export default {
  data () {
    return {}
  },
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage('extName');
    }
  }
}
</script>

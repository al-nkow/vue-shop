<template>
  <div id="app" class="main-wrap">
    <Page />
  </div>
</template>

<script>
import Page from './components/Page.vue'

export default {
  name: 'app',
  components: {
    Page
  },
  methods: {
    getData () {
      this.$store.dispatch('GET_DATA')
    }
  },
  mounted() {
    this.$options.interval = setInterval(this.getData, 15000)
  },
  beforeDestroy () {
    clearInterval(this.$options.interval)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  @import 'assets/styles/common.css';
</style>

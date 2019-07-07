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
  mounted() {
    this.$store.dispatch('GET_DATA');
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  @import 'assets/styles/common.css';
</style>

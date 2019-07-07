<template>
  <div class="wrap">
    <Header />
    <div class="products">
      <Category v-for="item in items" :data="item"/>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Category from './Category.vue'

  export default {
    name: 'Page',
    components: {
      Header,
      Category
    },
    computed: {
      items() {
        return this.$store.getters.GOODS
      }
    },
  }
</script>

<style scoped>
  .wrap {
    max-width: 800px;
    min-height: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    border-radius: 2px;
    background: #f1f1f1;
    overflow: hidden;
  }
  .products {
    padding: 20px;
  }
</style>
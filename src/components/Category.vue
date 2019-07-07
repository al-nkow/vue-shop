<template>
  <div class="block">
    <div class="name">
      <v-icon class="arrow" name="angle-down"/>
      {{ data[0].group_name }}
    </div>
    <div class="products">
      <Product v-for="item in data" :data="item"/>
    </div>
  </div>
</template>

<script>
  import Product from './Product.vue'

  export default {
    name: 'Category',
    components: {
      Product
    },
    props: {
      data: Array
    },
    mounted() {
      console.log('>>>>>>', this.data);
    }
  }
</script>

<style scoped>
  .name {
    text-align: left;
    padding: 1px 0 10px 30px;
    border-bottom: 2px solid #afb1bd;
    color: #656a80;
    font-weight: bold;
    position: relative;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .name:hover {
    color: #5a5d6f;
    border-bottom: 2px solid #5c6073;
  }
  .name:hover .arrow {
    color: #5a5d6f;
  }
  .arrow {
    width: 17px;
    height: 26px;
    position: absolute;
    top: 0;
    left: 0;
    color: #656a80;
  }
  .products {
    text-align: left;
  }
  .block {
    margin-bottom: 20px;
  }
</style>
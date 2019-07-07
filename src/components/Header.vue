<template>
  <div class="header">
    <v-icon class="logo" name="carrot"/>
    <div class="name">Stuffshop</div>
    <Rate />
    <HeadCart />
  </div>
</template>

<script>
  import Rate from './Rate.vue'
  import HeadCart from './HeadCart.vue'

  export default {
    name: 'Header',
    components: {
      Rate,
      HeadCart
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Yesteryear&display=swap');
  .logo {
    color: #e0aba4;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    position: absolute;
    left: 13px;
    top: 9px;
  }
  .header {
    text-align: left;
    padding: 3px 3px 3px 30px;
    background: #5c6073;
    position: relative;
  }
  .name {
    display: inline-block;
    color: #ffffff;
    vertical-align: middle;
    margin-left: 20px;
    font-family: 'Yesteryear', cursive;
    font-size: 32px;
  }
</style>
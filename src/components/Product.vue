<template>
  <div class="wrap">
    <div class="title">
      {{ data.product_name }}
    </div>
    <div class="controls">
      <div class="add">
        <v-icon class="cart" name="cart-plus"/>
      </div>
      <div class="amount">({{ data.P }})</div>
      <div class="price">
        {{ data.C }}
        <span>₽</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      data: Object
    }
  }
</script>

<style scoped>
  .wrap {
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 2px;
    margin: 6px;
    display: inline-block;
    width: 200px;
    padding: 20px;
    vertical-align: top;
  }
  .add {
    color: #ffffff;
    border-radius: 2px;
    background: #70a795;
    padding: 6px 9px 6px 6px;
    width: 26px;
    height: 23px;
    cursor: pointer;
    float: left;
    margin-right: 15px;
    vertical-align: middle;
  }
  .add:hover {
    background: #51796c;
  }
  .cart {
    width: 26px;
    height: 23px;
  }
  .title {
    margin-bottom: 10px;
  }
  .amount {
    font-size: 16px;
    vertical-align: middle;
    float: left;
    margin-top: 6px;
  }
  .price {
    float: right;
    vertical-align: middle;
    font-size: 20px;
    font-weight: bold;
    margin-top: 3px;
  }
  .controls {
    overflow: hidden;
  }
</style>
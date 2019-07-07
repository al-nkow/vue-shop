<template>
  <div class="wrap">
    <div v-if="data.cart" class="budget">
      <v-icon class="busket" name="shopping-basket"/>
    </div>
    <div class="title">
      {{ data.product_name }}
    </div>
    <div class="controls">
      <div
        class="add"
        :class="{'disabled': data.P === data.cart}"
        @click="addToCart()"
      >
        <v-icon class="cart" name="cart-plus"/>
      </div>
      <div class="amount">({{ data.P }})</div>
      <div
        class="price"
        :class="{
          'up': data.prevPrice && (data.prevPrice < data.price),
          'down': data.prevPrice && (data.prevPrice > data.price)
        }"
      >
        {{ data.price }}
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
    },
    methods: {
      addToCart() {
        if (this.data.P === this.data.cart) return;
        this.$store.commit('ADD_TO_CART', this.data.T);
        this.$toasted.show('Товар добавлен в корзину', {
          position: 'top-right',
          duration: 1000,
          className: 'good'
        })
      }
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
    position: relative;
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
  .add.disabled, .add.disabled:hover {
    cursor: default;
    background: #c2dad2;
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
  .price.up {
    color: #f34d4d;
  }
  .price.down {
    color: #4b9059;
  }
  .controls {
    overflow: hidden;
  }
  .budget {
    width: 32px;
    height: 32px;
    background: #6977b7;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    right: -4px;
    cursor: pointer;
  }
  .budget:hover {
    background: #5c6073;
    width: 34px;
    height: 34px;
    top: -5px;
    right: -5px;
  }
  .busket {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
</style>
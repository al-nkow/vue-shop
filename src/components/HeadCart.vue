<template>
  <div class="wrap-head-cart" @click="openCart">
    <span>{{ price }}</span>
    <span class="rub">₽</span>
    <v-icon class="busket" name="shopping-basket"/>
    <span>({{ count }})</span>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'HeadCart',
    methods: {
      openCart: function() {
        if (!this.count) return;
        this.$store.commit('TOGGLE_CART', true);
      }
    },
    computed: mapState({
      price: state => state.amount,
      count: state => state.count
    })
  }
</script>

<style scoped>
  .wrap-head-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ccdcd7;
    font-weight: bold;
    cursor: pointer;
  }
  .busket {
    width: 35px;
    height: 31px;
    vertical-align: middle;
    margin: 0 10px;
    color: #ddbbb7;
  }
  .rub {
    margin-left: 5px;
  }
  .wrap-head-cart:hover {
    color: #ffffff;
  }
  .wrap-head-cart:hover .busket {
    color: #ffffff;
  }
</style>
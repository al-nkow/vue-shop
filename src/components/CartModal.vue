<template>
  <div
    class="js-close overlay"
    v-if="cartModal"
    @click="close"
  >
    <div class="cart-modal-wrap">
      <CartTable />
      <div class="total">
        Итого:
        <span class="total-price">{{ amount }}</span>
        <span class="rub">₽</span>
      </div>
      <div class="js-close close-but">
        Закрыть
      </div>
    </div>
  </div>
</template>

<script>
  import CartTable from './CartTable.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'CartModal',
    components: {
      CartTable,
    },
    methods: {
      close(event) {
        if (event.target.classList[0] === 'js-close') {
          this.$store.commit('TOGGLE_CART', false);
        }
      },
    },
    computed: mapState({
      cartModal: state => state.cartModal,
      amount: state => state.amount,
    })
  }
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
  }
  .cart-modal-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    min-height: 100px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 10px;
    box-sizing: border-box;
  }
  .total {
    padding: 20px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
  }
  .rub {
    margin-left: 5px;
  }
  .close-but {
    position: absolute;
    right: 10px;
    bottom: 22px;
    padding: 8px 16px;
    border-radius: 2px;
    color: #ffffff;
    background: #70a795;
    cursor: pointer;
  }
  .close-but:hover {
    background: #51796c;
  }
</style>
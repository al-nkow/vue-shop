<template>
  <div
    class="overlay"
    v-if="cartModal"
    @click="close"
  >
    <div class="cart-modal-wrap">
      <div class="table-wrap">
        <table class="cart-table">
          <thead>
            <tr>
              <th width="40">Наименование товара</th>
              <th width="20">Кол-во</th>
              <th width="30">Цена</th>
              <th width="10"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in goods">
              <td>{{ item.product_name }}</td>
              <td>{{ item.cart }}</td>
              <td>{{ item.price }} руб.</td>
              <td>
                <v-icon class="delete" name="trash-alt"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="total">
        Итого:
        <span class="total-price">{{ amount }}</span>
        <span class="rub">₽</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CartModal',
    methods: {
      close: function(event) {
        if (event.target.classList[0] === 'overlay') {
          this.$store.commit('TOGGLE_CART', false)
        }
      }
    },
    computed: mapState({
      cartModal: state => state.cartModal,
      goods: state => state.goods.filter(item => item.cart),
      amount: state => state.amount
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
    width: 650px;
    min-height: 100px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 10px;
    box-sizing: border-box;
  }
  .cart-table {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .cart-table td {
    border-top: 1px solid #d3d7e6;
    border-bottom: 1px solid #d3d7e6;
  }
  .cart-table td, .cart-table th {
    padding: 10px 20px;
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
  .table-wrap {
    max-height: 400px;
    overflow: auto;
  }
  .delete {
    width: 18px;
    height: 20px;
    color: #5c6073;
    cursor: pointer;
  }
  .delete:hover {
    color: #f34d4d;
  }
</style>
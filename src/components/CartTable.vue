<template>
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
      <tr v-for="item in goods" :key="item.T">
        <td>{{ item.product_name }}</td>
        <td>
          <input
            class="cart-inp"
            type="text"
            :value="item.cart"
            @keyup="onKeyupInput($event, item)"
            @change="onChangeInput($event, item)"
          > шт.
          <div class="warning" v-if="item.cart === item.P">
            Количество ограничено
          </div>
        </td>
        <td>{{ item.price }} руб.</td>
        <td>
            <span @click="deleteItem(item)">
              <v-icon
                class="delete"
                name="trash-alt"
              />
            </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CartTable',
    methods: {
      deleteItem(item) {
        const payload = { id: item.T, value: 0};

        this.$store.commit('PUT_IN_CART', payload);
        this.$store.commit('SET_TOTAL');

        if (!this.goods.length) this.$store.commit('TOGGLE_CART', false);
      },
      onKeyupInput(event, item) {
        const inpValue = event.target.value;

        if (inpValue) {
          const val = inpValue.replace(/[^\d]/g, '');
          const result = val > item.P ? item.P : val;
          const payload = { id: item.T, value: +result};

          event.target.value = result;

          this.$store.commit('PUT_IN_CART', payload);
          this.$store.commit('SET_TOTAL');
        }
      },
      // If we leave the field unchanged - it is necessary to restore the previous value
      onChangeInput(event, item) {
        if (!+event.target.value) event.target.value = item.cart;
      }
    },
    computed: mapState({
      goods: state => state.goods.filter(item => item.cart),
    })
  }
</script>

<style scoped>
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
  .cart-inp {
    border: 1px solid #d3d7e6;
    background: #ffffff;
    padding: 4px 6px;
    border-radius: 2px;
    margin: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 40px;
    font-size: 14px;
    color: #474a58;
  }
  .warning {
    color: #f34d4d;
    font-size: 11px;
  }
</style>
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
        <td>{{ item.cart }} шт.</td>
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
        this.$store.commit('REMOVE_FROM_CART', item.T)
        this.$store.commit('SET_TOTAL');
        if (!this.goods.length) this.$store.commit('TOGGLE_CART', false)
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
</style>
<template>
  <div class="wrap">
    <span class="usd">1 USD = </span>
    <input class="rate-inp" type="text" v-model="rate">
    <span class="rub">₽</span>
  </div>
</template>

<script>
//  import { mapState } from 'vuex';

  let timeout = null;

  export default {
    name: 'Rate',
    data: () => ({
      value: 20
    }),
    computed: {
      rate: {
        get () {
          return this.$store.state.rate
        },
        set (value) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            const res = value.replace(/[^\d.]/g, '');
            this.$store.commit('SET_RATE', res)
            this.$store.commit('UPDATE_PRICE')
            this.$store.commit('SET_TOTAL')
          }, 500);
        }
      }
    }
//    computed: mapState({
//      rate: state => state.rate
//    })


  }
</script>

<style scoped>
  .wrap {
    display: inline-block;
    vertical-align: middle;
    color: #ffffff;
    margin-left: 50px;
  }
  .rate-inp {
    border: none;
    backgrount: #ffffff;
    padding: 4px 6px;
    border-radius: 2px;
    margin: 3px;
    box-shadow: none;
    width: 50px;
    font-size: 16px;
    color: #474a58;
    font-weight: bold;
  }
  .rub {
    font-size: 24px;
    vertical-align: middle;
  }
  .usd {
    font-size: 20px;
    vertical-align: middle;
  }
</style>
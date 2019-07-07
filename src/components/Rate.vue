<template>
  <div class="wrap">
    <span class="usd">1 USD = </span>
    <input class="rate-inp" type="text" v-model="rate">
    <span class="rub">₽</span>
  </div>
</template>

<script>
//  import { mapState } from 'vuex';

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
          this.$store.commit('SET_RATE', value)
        }
      }
    }
//    computed: mapState({
//      rate: state => state.rate
//    })
//    methods: {
//      log () {
//        console.log('Hello world')
//      }
//    },
//    created () {
//      this.$options.interval = setInterval(this.log, 1000)
//    },
//    beforeDestroy () {
//      clearInterval(this.$options.interval)
//    }
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
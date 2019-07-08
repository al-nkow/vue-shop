import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import info from '../assets/names';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    goods: null,
    rate: null,
    oldPrice: null,
    amount: 0,
    count: 0,
    cartModal: false,
  },

  getters: {
    GOODS: state => {
      const groupedData = groupData(state.goods);
      return groupedData;
    },
  },

  mutations: {
    TOGGLE_CART: (state, payload) => {
      state.cartModal = payload;
    },
    SET_DATA: (state, payload) => {
      state.goods = payload;
    },
    SET_RATE: (state, payload) => {
      state.rate = payload;
    },
    SET_TOTAL: (state) => {
      const total = countTotal(state.goods);
      state.amount = +total.amount.toFixed(2);
      state.count = total.count;
    },
    PUT_IN_CART: (state, payload) => {
      state.goods.forEach((item, index) => {
        if (item.T === payload.id) {
          Vue.set(state.goods[index], 'cart', payload.value);
        }
      });
    },
    UPDATE_PRICE: (state) => {
      const { rate, goods } = state;
      goods.forEach((item) => {
        item.prevPrice = item.price;
        item.price = +(item.C * rate).toFixed(2);
      })
    },
  },

  actions: {
    GET_DATA: async (context) => {
      try {
        const response = await axios.get('data.json')
        const data = response.data.Value.Goods;

        const rate = getRate(20, 80);
        const prevCartData = savePreviousState(context.state.goods);

        additionalInfo(data, rate, prevCartData);

        context.commit('SET_RATE', rate);
        context.commit('SET_DATA', data);
        context.commit('SET_TOTAL', data);
      } catch(error) {
        console.log('GET DATA ERROR:', error);
        alert('ERROR');
      }
    },
  },
});

/**
 * In the case of updating the list of products, we may lose information about
 * the goods in the cart - therefore, it is necessary to save this data
 */
function savePreviousState(goods) {
  let oldPrice = null;
  if (goods) {
    oldPrice = goods.reduce((res, item) => {
      res[item.T] = {
        price: item.price,
        cart: item.cart,
      };
      return res;
    }, Object.create(null));
  }
  return oldPrice;
}

/**
 * Add additional information to the goods
 */
function additionalInfo(data, rate, prevCartData) {
  data.forEach(item => {
    item.group_name = info[item.G].G;
    item.product_name = info[item.G].B[item.T].N;

    // Save previous price and amount added to cart
    if (prevCartData && prevCartData[item.T]) {
      item.prevPrice = prevCartData[item.T].price;
      item.cart = prevCartData[item.T].cart;
    }

    item.price = +(item.C * rate).toFixed(2);
  })
}

/**
 * Group data into categories to display products
 */
function groupData(data) {
  if (!data || !data.length) return [];
  return data.reduce((res, item) => {
    res[item.G] = res[item.G] || [];
    res[item.G].push(item);
    return res;
  }, Object.create(null));
}

/**
 * Generate a currency rate in a given range
 */
function getRate(min, max) {
  return +(Math.random() * (max - min + 1) + min).toFixed(2);
}

/**
 * Calculation of the total amount and quantity of goods in the basket
 */
function countTotal(goods) {
  return goods.reduce((res, item) => {
    if (!item.cart) return res;
    res.amount = res.amount + item.cart * item.price;
    res.count = res.count + item.cart;
    return res;
  }, {
    amount: 0,
    count: 0,
  });
}
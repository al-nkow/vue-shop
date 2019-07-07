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
    SET_TOTAL: (state, payload) => {
      let amount = 0;
      let count = 0;
      state.goods.forEach(item => {
        if (item.cart) {
          amount = amount + item.cart * item.price;
          count = count + item.cart;
        }
      });
      state.amount = +amount.toFixed(2);
      state.count = count;
    },
    ADD_TO_CART: (state, payload) => {
      state.goods.forEach((item, index) => {
        if (item.T === payload) {
          Vue.set(state.goods[index], 'cart', item.cart ? item.cart + 1 : 1)
        }
      });
    },
    REMOVE_FROM_CART: (state, payload) => {
      state.goods.forEach((item, index) => {
        if (item.T === payload) {
          state.goods[index].cart = 0
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
    GET_DATA: async (context, payload) => {
      try {
        const response = await axios.get('data.json')
        const data = response.data.Value.Goods;


        var rate = getRate(20, 80);
        context.commit('SET_RATE', rate);

        // Сохраним предыдущую цену в рублях
        let oldPrice = null;
        const goods = context.state.goods;
        if (goods) {
          oldPrice = goods.reduce((res, item) => {
            res[item.T] = {
              price: item.price,
              cart: item.cart
            };
            return res;
          }, Object.create(null))
        }

        addInfo(data, rate, oldPrice);

        context.commit('SET_DATA', data);
        context.commit('SET_TOTAL', data);

      } catch(error) {
        console.log('GET DATA ERROR:', error);
        alert('ERROR');
      }
    },
  },
});





function addInfo(data, rate, oldPrice) {
  data.forEach(item => {
    item.group_name = info[item.G].G;
    item.product_name = info[item.G].B[item.T].N;

    // Save previous price
    if (oldPrice && oldPrice[item.T]) {
      item.prevPrice = oldPrice[item.T].price;
      item.cart = oldPrice[item.T].cart;
    }

    item.price = +(item.C * rate).toFixed(2);
  })
}

function groupData(data) {
  if (!data || !data.length) return [];
  return data.reduce((res, item) => {
    res[item.G] = res[item.G] || [];
    res[item.G].push(item);
    return res;
  }, Object.create(null));
}

function getRate(min, max) {
  return +(Math.random() * (max - min + 1) + min).toFixed(2);
}
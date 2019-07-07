import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import info from '../assets/names';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    goods: null,
    rate: null
  },

  getters: {
    GOODS: state => {
      const groupedData = groupData(state.goods);
      return groupedData;
    },
  },

  mutations: {
    SET_DATA: (state, payload) => {
      state.goods = payload;
    },
    SET_RATE: (state, payload) => {
      state.rate = payload;
    },

    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    },
  },

  actions: {
    GET_DATA: async (context, payload) => {
      try {
        const response = await axios.get('data.json')
        const data = response.data.Value.Goods;


        var rate = getRate(20, 80);
        context.commit('SET_RATE', rate);


        addInfo(data, rate);







        console.log('DATA >>>>>>', data);


        context.commit('SET_DATA', data);





      } catch(error) {
        console.log('GET DATA ERROR:', error);
        alert('ERROR');
      }
    },




    SAVE_TODO: async (context, payload) => {
      let {data} = await Axios.post('http://yourwebsite.com/api/todo');
      context.commit('ADD_TODO', payload);
    },
  },
});


function addInfo(data, rate) {
  data.forEach(item => {
    item.group_name = info[item.G].G;
    item.product_name = info[item.G].B[item.T].N;
    item.prevPrice = item.price;
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
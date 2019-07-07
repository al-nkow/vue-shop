import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import info from '../assets/names';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    goods: null,
  },

  getters: {
    GOODS: state => {
      return state.goods;
    },
  },

  mutations: {
    SET_DATA: (state, payload) => {
      state.goods = payload;
    },

    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    },
  },

  actions: {
    GET_DATA: async (context, payload) => {
      // context.commit('SET_TODO', data);
      try {
        const response = await axios.get('data.json')
        const data = response.data.Value.Goods;

        addInfo(data);

        const groupedData = groupData(data);




        console.log('DATA >>>>>>', data);
        console.log('GROUPED DATA >>>>>>', groupedData);

        context.commit('SET_DATA', groupedData);





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


function addInfo(data) {
  data.forEach(item => {
    item.group_name = info[item.G].G;
    item.product_name = info[item.G].B[item.T].N;
  })
}

function groupData(data) {
  let result = [];
  result = data.reduce((res, item) => {
    res[item.G] = res[item.G] || [];
    res[item.G].push(item);
    return res;
  }, Object.create(null));

  return result;
}
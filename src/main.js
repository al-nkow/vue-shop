import Vue from 'vue'
import App from './App.vue'

import {store} from './store'

import Toasted from 'vue-toasted';

import 'vue-awesome/icons/carrot'
import 'vue-awesome/icons/angle-down'
import 'vue-awesome/icons/angle-up'
import 'vue-awesome/icons/cart-plus'
import 'vue-awesome/icons/shopping-basket'
import 'vue-awesome/icons/trash-alt'

import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false

Vue.component('v-icon', Icon)
Vue.use(Toasted)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

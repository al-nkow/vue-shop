import Vue from 'vue'
import App from './App.vue'

import 'vue-awesome/icons/carrot'
import 'vue-awesome/icons/angle-down'
import 'vue-awesome/icons/angle-up'

import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false

Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')

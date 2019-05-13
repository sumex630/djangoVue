import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import {router} from './router'
import store from './store'
import './plugins/element.js'
import './plugins/iview.js'
import './plugins/echarts.js'

Vue.config.productionTip = false

Vue.prototype.LS = {
  set(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  del(key) {
    localStorage.removeItem(key)
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

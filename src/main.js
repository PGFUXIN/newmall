import Vue from 'vue'
import App from './App.vue'
import "./assets/css/base.css"
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

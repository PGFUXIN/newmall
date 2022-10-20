import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    goodType: 0
  },
  mutations: {
    setGoodType(state,index){
      state.goodType = index
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})
export default store
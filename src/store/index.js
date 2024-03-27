import Vue from 'vue'
import Vuex from 'vuex'
import sysFrm from './sysFrm'//引入sysFrm页面

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sysFrm,//使用sysFrm页面
  }
})

export default store;

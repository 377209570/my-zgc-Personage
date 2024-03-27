const state = {
  //默认值active为null
  active:null
};

const getters = {
  active: state => state.active
};

const actions = {
  GetOne({ commit }, data) {
    commit('CHANGE_ACTIVE_LI', { active: data})
  },
}

const mutations = {
  CHANGE_ACTIVE_LI(state, { active }) {
    state.active = active
  },
}

// 导出
export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}
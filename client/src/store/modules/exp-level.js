import expLevelApi from '../seeds/experience-seed'

const state = {
  expLevelList: []
}

const mutations = {
  UPDATE_EXP_LEVEL(state, payload) {
    state.expLevelList = payload;
  }
}

const actions = {
  getExpLevel(context) {
    context.commit('UPDATE_EXP_LEVEL', expLevelApi)
  }
}

const getters = {
  expLevelList: state => state.expLevelList
}

const expLevelModule = {
  state,
  mutations,
  actions,
  getters
}

export default expLevelModule

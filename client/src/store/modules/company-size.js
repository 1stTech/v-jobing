import cSizeApi from '../seeds/company-size-seed'

const state = {
  cSize: []
}

const mutations = {
  UPDATE_COMPAMY_SIZE(state, payload) {
    state.cSize = payload;
  }
}

const actions = {
  getCompanySize(context) {
    context.commit('UPDATE_COMPAMY_SIZE', cSizeApi)
  }
}

const getters = {
  companySize: state => state.cSize
}

const cSizeModule = {
  state,
  mutations,
  actions,
  getters
}

export default cSizeModule

import api from '@/mixins/axios-api'

const state = {
  regions: []
}

const mutations = {
  UPDATE_REGIONS(state, payload) {
    state.regions = payload;
  }
}

const actions = {
  getRegions(context, code) {
    api.get(`getRegionList/${code}`)
      .then( res => context.commit('UPDATE_REGIONS', res))
  }
}

const getters = {
  regions: state => state.regions
}

const regionModule = {
  state,
  mutations,
  actions,
  getters
}

export default regionModule
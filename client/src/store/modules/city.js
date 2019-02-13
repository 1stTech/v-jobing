import api from '@/mixins/axios-api'

const state = {
  cities: []
}

const mutations = {
  UPDATE_CITIES(state, payload) {
    state.cities = payload;
  }
}

const actions = {
  getCities(context, data) {
    api.get(`getCityList/${data.code}/${data.region}`)
      .then( res => context.commit('UPDATE_CITIES', res))
  }
}

const getters = {
  cities: state => state.cities
}

const cityModule = {
  state,
  mutations,
  actions,
  getters
}

export default cityModule
import api from '@/mixins/axios-api'

const state = {
  countries: []
}

const mutations = {
  UPDATE_COUNTRIES(state, payload) {
    state.countries = payload;
  }
}

const actions = {
  getCountries(context) {
    api.get('getCoutryList')
      .then( res => context.commit('UPDATE_COUNTRIES', res))
  }
}

const getters = {
  countries: state => state.countries
}

const countryModule = {
  state,
  mutations,
  actions,
  getters
}

export default countryModule
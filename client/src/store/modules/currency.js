import api from '@/mixins/axios-api'

const state = {
  currencies: []
}

const mutations = {
  UPDATE_CURRENCIES(state, payload) {
    state.currencies = payload;
  }
}

const actions = {
  getCurrencies(context) {
    api.get('getCurrencyList')
      .then( res => context.commit('UPDATE_CURRENCIES', res))
  }
}

const getters = {
  currencies: state => state.currencies
}

const currencyModule = {
  state,
  mutations,
  actions,
  getters
}

export default currencyModule

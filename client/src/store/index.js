import Vue from 'vue'
import Vuex from 'vuex'

import vacancy from './modules/vacancy'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vacancy
  }
})
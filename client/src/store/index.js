import Vue from 'vue'
import Vuex from 'vuex'

// Geolocation modules
import country from './modules/country'
import region from './modules/region'
import city from './modules/city'
import vacancy from './modules/vacancy'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    country,
    region,
    city,
    vacancy
  }
})
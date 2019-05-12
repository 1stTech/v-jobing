import Vue from 'vue'
import Vuex from 'vuex'

// Geolocation modules
import country from './modules/country'
import region from './modules/region'
import city from './modules/city'
import vacancy from './modules/vacancy'
import tag from './modules/tag'
import role from './modules/role'
import jobType from './modules/job-type'
import jobFormat from './modules/job-format'
import expLevel from './modules/exp-level'
import comSize from './modules/company-size'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    country,
    region,
    city,
    vacancy,
    tag,
    role,
    jobType,
    jobFormat,
    expLevel,
    comSize,
  }
})

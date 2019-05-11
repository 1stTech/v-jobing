import jobTypesApi from '../seeds/job-type-seed'

const state = {
  jobTypes: []
}

const mutations = {
  UPDATE_JOB_TYPES(state, payload) {
    state.jobTypes = payload;
  }
}

const actions = {
  getJobTypes(context) {
    context.commit('UPDATE_JOB_TYPES', jobTypesApi)
  }
}

const getters = {
  jobTypes: state => state.jobTypes
}

const jobTypeModule = {
  state,
  mutations,
  actions,
  getters
}

export default jobTypeModule

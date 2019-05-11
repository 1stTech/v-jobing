import jobFormatApi from '../seeds/job-format-seed'

const state = {
  jobFormatList: []
}

const mutations = {
  UPDATE_JOB_FORMAT(state, payload) {
    state.jobFormatList = payload;
  }
}

const actions = {
  getJobFormat(context) {
    context.commit('UPDATE_JOB_FORMAT', jobFormatApi)
  }
}

const getters = {
  jobFormatList: state => state.jobFormatList
}

const jobFormatModule = {
  state,
  mutations,
  actions,
  getters
}

export default jobFormatModule

import vacancies from './vacancy_seed'

const state = {
  vacancies: []
}

const mutations = {
  UPDATE_VACANCIES(state, payload) {
    state.vacancies = payload;
  }
}

const actions = {
  getVacancies(context) {
    context.commit('UPDATE_VACANCIES', vacancies)
  }
}

const getters = {
  vacancies: state => state.vacancies
}

const vacancyModule = {
  state,
  mutations,
  actions,
  getters
}

export default vacancyModule
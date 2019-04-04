import rolesApi from '../seeds/role-seed'

const state = {
  roles: []
}

const mutations = {
  UPDATE_ROLES(state, payload) {
    state.roles = payload;
  }
}

const actions = {
  getRoles(context) {
    context.commit('UPDATE_ROLES', rolesApi)
  }
}

const getters = {
  roles: state => state.roles
}

const roleModule = {
  state,
  mutations,
  actions,
  getters
}

export default roleModule

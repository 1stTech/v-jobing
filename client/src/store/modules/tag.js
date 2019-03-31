import api from '@/mixins/axios-api'

const state = {
  tags: []
}

const mutations = {
  UPDATE_TAGS(state, payload) {
    state.tags = payload;
  }
}

const actions = {
  async getTags(context, query) {
    const res = await api.get(`getTags/${query}`)
    context.commit('UPDATE_TAGS', res)
  }
}

const getters = {
  tags: state => state.tags
}

const tagModule = {
  state,
  mutations,
  actions,
  getters
}

export default tagModule

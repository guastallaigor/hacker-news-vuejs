import HackerNewsService from '@/services/HackerNewsService'

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const actions = {
  async getUser ({ commit }, id) {
    commit('clearUser')
    const { data } = await HackerNewsService.getUser(id)
    commit('setUser', data)

    return data
  }
}

const mutations = {
  clearUser (state) {
    state.user = null
  },
  setUser (state, data) {
    state.user = data
  }
}

const user = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default user

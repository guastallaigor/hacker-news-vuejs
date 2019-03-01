import HackerNewsService from '@/services/HackerNewsService'

const state = {
  stories: []
}

const getters = {
  stories: state => state.stories
}

const actions = {
  async getTopStories({ commit }) {
    commit('clear')
    const { data } = await HackerNewsService.getTopStories()
    commit('setStories', data)

    return data
  },
  async getBestStories({ commit }) {
    commit('clear')
    const { data } = await HackerNewsService.getBestStories()
    commit('setStories', data)

    return data
  },
  async getNewStories({ commit }) {
    commit('clear')
    const { data } = await HackerNewsService.getNewStories()
    commit('setStories', data)

    return data
  }
}

const mutations = {
  clear(state) {
    state.stories = []
  },
  setStories(state, stories) {
    state.stories = stories
  }
}

const loading = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default loading

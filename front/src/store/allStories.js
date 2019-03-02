import HackerNewsService from '@/services/HackerNewsService'

const state = {
  requestData: {},
  stories: []
}

const getters = {
  requestData: state => state.requestData,
  stories: state => state.stories
}

const actions = {
  async getTopStories ({ commit }, queryString) {
    const { data } = await HackerNewsService.getTopStories(queryString)
    commit('setStories', data)

    return data
  },
  async getBestStories ({ commit }, queryString) {
    const { data } = await HackerNewsService.getBestStories(queryString)
    commit('setStories', data)

    return data
  },
  async getNewStories ({ commit }, queryString) {
    const { data } = await HackerNewsService.getNewStories(queryString)
    commit('setStories', data)

    return data
  }
}

const mutations = {
  clear (state) {
    state.stories = []
  },
  setStories (state, data) {
    state.requestData = data
    state.stories = [...state.stories, ...data.data]
  }
}

const allStories = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default allStories

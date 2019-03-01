import app from '../main'

const state = {
  loading: false
}

const getters = {
  loading: state => state.loading
}

const actions = {}

const mutations = {
  setLoadingFalse(state) {
    state.loading = false
    app.$Progress.finish()
  },
  setLoadingTrue(state) {
    state.loading = true
    app.$Progress.start()
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

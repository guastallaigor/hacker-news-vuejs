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
  },
  setLoadingTrue(state) {
    state.loading = true
  }
}

const loading = {
  state,
  getters,
  actions,
  mutations
}

export default loading

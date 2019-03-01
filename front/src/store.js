import Vue from 'vue'
import Vuex from 'vuex'
import loading from '@/store/loading'
import allStories from '@/store/allStories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loading,
    allStories
  }
})

export default store

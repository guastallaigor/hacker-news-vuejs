import Vue from 'vue'
import Vuex from 'vuex'
import loading from '@/store/loading'
import allStories from '@/store/allStories'
import user from '@/store/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loading,
    allStories,
    user
  }
})

export default store

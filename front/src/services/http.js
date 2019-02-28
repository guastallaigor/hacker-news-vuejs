import axios from 'axios'
import Env from '../.env'
import store from '../store'

const axiosService = axios.create({
  baseURL: Env.API
})

axiosService.interceptors.request.use((config) => {
  store.commit('setLoadingTrue')

  return config
}, err => Promise.reject(err))

axiosService.interceptors.response.use((success) => {
  store.commit('setLoadingFalse')

  return success
}, (err) => {
  store.commit('setLoadingFalse')

  return Promise.reject(err)
})

export default axiosService

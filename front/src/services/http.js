import axios from 'axios'
import Env from '../.env'
import store from '../store'

const axiosService = axios.create({
  baseURL: Env.API
})

axiosService.interceptors.request.use((config) => {
  store.commit('loading/setLoadingTrue')

  return config
}, err => Promise.reject(err))

axiosService.interceptors.response.use((success) => {
  store.commit('loading/setLoadingFalse')

  return success
}, (err) => {
  store.commit('loading/setLoadingFalse')

  return Promise.reject(err)
})

export default axiosService

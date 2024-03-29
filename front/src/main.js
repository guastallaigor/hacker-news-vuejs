import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/style/main.scss'
import formatTime from '@/filters/format-time'
import textSubstr from '@/filters/text-substr'

Vue.filter('formatTime', formatTime)
Vue.filter('textSubstr', textSubstr)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

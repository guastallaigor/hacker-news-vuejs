import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/style/flex.scss'
import VueProgressBar from 'vue-progressbar'
import textSubstr from '@/filters/text-substr'

const options = {
  color: '#ec6a45',
  failedColor: '#000000',
  thickness: '9px',
  transition: {
    speed: '0.2s',
    opacity: '0.7s',
    termination: 300
  }
}

Vue.use(VueProgressBar, options)
Vue.filter('textSubstr', textSubstr)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from '@/App.tsx'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "@/assets/js/http"
import 'vant/lib/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

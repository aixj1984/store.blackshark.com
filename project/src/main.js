import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'

import axios from 'axios'

import Vant from './vant/vant'
Vue.prototype.$axios = axios

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import qs from "qs";
Vue.prototype.$qs = qs;
Vant()
import './css/index.css'
import './lib/rem'
import './lib/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//跨域
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;



import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

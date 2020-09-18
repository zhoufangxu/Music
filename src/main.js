import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import echarts from 'echarts';


//设置默认请求地址
axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//跨域
axios.defaults.withCredentials = true;

//将axios加入到vue原型对象中
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;



import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

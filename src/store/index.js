import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem("username") || '',  //保存用户登录名
    token: localStorage.getItem('token') || sessionStorage.getItem('token'),  //保存token信息
    phone: localStorage.getItem('phone'),
    userId: localStorage.getItem('userId'),
    upwd:'',  //用户登录时密码
  },
  mutations: {
    increment (state, upwd) {
      // 变更登录密码
      state.upwd = upwd;
    }
  },
  actions: {
  },
  modules: {
  }
})

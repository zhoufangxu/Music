import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Container from '../views/Container';
import CheckCode from '../components/login/checkCode';
import UserInfo from '../views/userInfo';

//解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isLogin: true  //添加该字段表示进入这个路由需要登录
    },
    children: [
      {
        path: '/',
        name: 'Container',
        component: Container,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/checkcode',
    name: 'checkcode',
    component: CheckCode,
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: UserInfo,
  }
]


const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next) => {
  if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
      if (localStorage['username']) {
          next();
      }else{
          next({
              path:"/login",
              query:{
                  redirect:to.fullPath
              }
          });
      }
  }else{
      next()
  }
});



export default router

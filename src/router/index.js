import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import index from '@/page/index/index'
import home from '@/page/home/home'
import cure from '@/page/cure/cure'
import death from '@/page/death/death'
import healthInfo from '@/page/healthInfo/healthInfo'
import article from '@/page/article/article'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/index',
      name:'index',
      component: index,
      //重定向
      redirect:'/home',
      //二级路由
      children:[
        {
          path:'/home',
          name:'home',
          component: home
        },
        {
          path:'/cure',
          name:'cure',
          component: cure
        },
        {
          path:'/death',
          name:'death',
          component: death
        },
        {
          path:'/healthInfo',
          name:'healthInfo',
          component: healthInfo
        },
        {
          path:'/article',
          name:'article',
          component: article
        }
      ]
    },
  ]
})

// 路由导航守卫
//页面打开时显示
router.beforeEach((to, from, next) =>{
  NProgress.start() 
  let token = localStorage.getItem("token")
  if(token && token == '2021314hebelove'){
    // 如果用户信息存在则往下执行
    next()
  } else {
      //如果用户信息不存在则跳转到login页面
    if (to.path === '/') {
      next()
    } else {
      next('/')
    }
  }
})


// 页面加载完成
router.afterEach(() => {
  NProgress.done()
})


export default router

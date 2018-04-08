import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Dashboard from '@/components/Dashboard'
import AuthService from '@/services/AuthService'
import store from '@/store'
import PreloadService from '@/services/PreloadService'

const preloadApi = new PreloadService()
let authService = new AuthService()

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    next()
  } else {
    if (authService.isLoggedIn()) {
      preloadApi.preloadAll().then(() => {
        next()
      })
    } else if (to.name !== 'Landing') {
      next('/')
    } else {
      next()
    }
  }
})

export default router

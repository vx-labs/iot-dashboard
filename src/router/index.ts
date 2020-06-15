import Vue from 'vue'
import VueRouter, { RouteConfig, NavigationGuard } from 'vue-router'
import Devices from '../views/Devices.vue'
import Topics from '../views/Topics.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../components/Login.vue'
import About from '../views/About.vue'
import store from '../store/index';

Vue.use(VueRouter)

const requireAuth: NavigationGuard<Vue> = (to, from, next) => {
  if (!store.getters.authenticated) {
    next({
      path: '/login',
      query: { lastPage: to.fullPath }
    })
  } else {
    next()
  }
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth,
  },
  {
    path: '/devices/',
    name: 'Devices',
    component: Devices,
    beforeEnter: requireAuth,
  },
  {
    path: '/topics/',
    name: 'Topics',
    component: Topics,
    beforeEnter: requireAuth,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  { path: '/login', component: Login },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
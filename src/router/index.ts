import Vue from 'vue'
import VueRouter, { RouteConfig, NavigationGuard } from 'vue-router'
import Devices from '../views/Devices.vue'
import Events from '../views/Events.vue'
import Topics from '../views/Topics.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Support from '../views/Support.vue'
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
    path: '/events/',
    name: 'Events',
    component: Events,
    beforeEnter: requireAuth,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  { path: '/login', component: Login },
  { path: '/support', component: Support },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

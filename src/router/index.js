import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('@/views/slot/Main.vue')
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import('@/views/promise/Main.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('@/views/computed/computedIndex.vue')
  },
  {
    path: '/PageLayout',
    name: 'PageLayout',
    component: () => import('@/views/PageLayout/Main.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/testIndex.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
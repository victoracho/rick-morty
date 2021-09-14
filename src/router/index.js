import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/episodes/:page?',
    alias: '/',
    name: 'Episodes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Episodes.vue')
  },
  {
    path: '/locations/:page?',
    name: 'Locations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Locations.vue')
  },
  {
    path: '/Characters/:page?',
    name: 'Characters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Characters.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/scenic-spots',
    component: () => import('../views/ScenicSpots.vue')
  },
  {
    path: '/scenic-spots/:id',
    component: () => import('../views/ScenicSpotDetail.vue')
  },
  {
    path: '/activities',
    component: () => import('../views/Activities.vue')
  },
  {
    path: '/activities/:id',
    component: () => import('../views/ActivityDetail.vue')
  },
  {
    path: '/restaurants',
    component: () => import('../views/Restaurants.vue')
  },
  {
    path: '/restaurants/:id',
    component: () => import('../views/RestaurantDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

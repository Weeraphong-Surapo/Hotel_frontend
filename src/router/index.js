import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const   routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props:true,
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/ServiceView.vue')
  },
  {
    path: '/rooms',
    name: 'room',
    component: () => import('../views/RoomView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/myrooms',
    name: 'myrooms',
    component: () => import('../views/MyRoomsView.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/PasswordView.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/MangeRooms/NewRoom.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name:'login'
        })
      }
      next()

    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

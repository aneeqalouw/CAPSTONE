import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/ '../views/AboutView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import(/ '../views/CoursesView.vue')
  },
  {
    path: '/course/:id',
    name: 'about',
    component: () => import(/ '../views/CourseView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/ '../views/LoginView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/ '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'about',
    component: () => import(/ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
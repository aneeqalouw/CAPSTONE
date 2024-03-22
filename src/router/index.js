import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
import { computed } from 'vue'
import Swal from 'sweetalert2'
const {cookies} = useCookies()

const routes = [
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
    path: '/courses',
    name: 'courses',
    component: () => import('../views/CoursesView.vue')
  },
  {
    path: '/courses/:id',
    name: 'course',
    component: () => import('../views/CourseView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    beforeEnter(){
      if(!cookies.get('LegitUser')){
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../views/BookView.vue'),
    beforeEnter(){
      if(!cookies.get('LegitUser')){
        router.push({name : 'login'})
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter(){
      if(!cookies.get('LegitUser')){
        router.push({name : 'login'})
      }else if(cookies.get('userRole') !== 'admin'){
       alert('Only admins may view this page')
       router.push({name: 'home'})
      }
    },

    
  },
  {
    path: '/logout',
    name: 'logout',
    component: ()=> import('../views/HomeView.vue'),
    beforeEnter(){
      cookies.remove('LegitUser')
      router.push({name: 'home'})
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
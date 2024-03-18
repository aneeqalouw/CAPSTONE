import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
import { computed } from 'vue'
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
    path: '/users/:id',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    beforeEnter(){
      if(!cookies.get('LegitUser')){
        router.push({name: 'login'})
      }
    }
  },
  {
    path: '/updateaccount',
    name: 'updateaccount',
    component: () => import('../views/UpdateAccount.vue')
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
    component: () => import('../views/AdminView.vue')
    // computed: {
    //   checkUser(){
    //     cookies.get('LegitUser')
    //     if(cookies.result.userRole != 'admin'){
    //       alert('Only admins can view this page')
    //       router.push({name: 'home'})
    //     }
    //   }
    // },
    // beforeEnter(){
    //   this.checkUser()
    //   if(!cookies.get('LegitUser')){
    //     router.push({name : 'login'})
    //   }
      
    // },

    
  },
  {
    path: '/logout',
    name: 'logout',
    component: ()=> import('../views/LoginView.vue'),
    beforeEnter(){
      router.push({name: 'login'})
      cookies.remove('LegitUser')
      window.location.reload
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
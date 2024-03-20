import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
import { Button } from 'bootstrap'
const dbURL = 'https://capstone-1-o3t8.onrender.com/'


export default createStore({
  state: {
    users:null,
    user:null,
    course:null,
    courses:null,
    students: null,
    student: null
  },
  getters: {
  },
  mutations: {
    setUsers(state,value) {
      state.users= value
    },
    setUser(state,value) {
      state.user= value
    },
    setCourse(state,value) {
      state.course= value
    },
    setCourses(state,value) {
      state.courses= value
    },
    setStudents(state, value){
      state.students = value
    },
    setStudent(state, value){
      state.student = value
    }

  },
  actions: {
    //users
    async register(context, payload) {
      try{
        let {msg, token} = (await axios.post(`${dbURL}users/register`, payload)).data
        if(token) {
          context.dispatch('fetchUsers')
          Swal.fire({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
          router.push({name: 'login'})
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'There was an error trying to register',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUsers(context) {
      try{
        let {results} = (await axios.get(`${dbURL}users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to retrieve users',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUser(context, payload) {
      try{
        let {result} = (await axios.get(`${dbURL}users/${payload.id}`)).data
        if(result) {
          context.commit('setUser', result)
         } 
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'User was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateUser(context, payload) {
      try{
        let {msg} = (await axios.patch(`${dbURL}users/updateUser/${payload.userID}`, payload)).data
          context.dispatch('fetchUsers')
          Swal.fire({
            title: 'Update User',
            text: msg,
            icon: "success",
            timer: 2000
          })  
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to update user',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async deleteUser(context, payload) {
      try{
        let {msg} = await axios.delete(`${dbURL}users/deleteUser/${payload.id}`)
          context.dispatch('fetchUsers')
          Swal.fire({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to delete user',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async login(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${dbURL}users/login`, payload)).data 
       console.log(result);
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('userID', result.userID )
        cookies.set('userRole', result.userRole)
        cookies.set('LegitUser', {
          msg, token, result
        })
        AuthenticateUser.applyToken(token)
        Swal.fire({
          title: `Hi 
          ${result?.firstName}!`,
          text: `Welcome back`,
          imageUrl: 'https://i.postimg.cc/66gvLsh8/cheer-cat.gif',
          timer: 3000
        })
          router.push({name: 'home'})
        }else {
          Swal.fire({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        })
      }
      

    },

    //courses
    async fetchCourses(context) {
      try{
        let {results} = 
        (await axios.get(`${dbURL}courses`)).data
        if(results) {
          context.commit('setCourses', results)
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to retrieve courses',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchCourse(context, payload) {
      try{
        let {result} = (await axios.get(`${dbURL}courses/${payload.id}`)).data
        if(result) {
          context.commit('setCourse', result)
        }else {
          Swal.fire({
            title: 'Retrieving course',
            text: 'Course was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Course was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async addCourse(context, payload){
      try{
        let{msg} = (await axios.post(`${dbURL}courses/addCourse`, payload)).data
          context.dispatch('fetchCourses')
          Swal.fire({
            title: 'Add course',
            text: msg,
            icon: "success",
            timer: 2000

          })
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to add course',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateCourse(context, payload) {
      try{   
        let {msg} = (await axios.patch(`${dbURL}courses/updateCourse/${payload.courseID}`, payload)).data  
          context.dispatch('fetchCourses')
          Swal.fire({
            title: 'Update course',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to update course',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async deleteCourse(context, payload) {
      try{
        let {msg} = (await axios.delete(`${dbURL}courses/deleteCourse/${payload.courseID}`)).data
          context.dispatch('fetchCourses')
          Swal.fire({
            title: 'Delete course',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to delete course',
          icon: "error",
          timer: 2000
        }) 
      }
    },


    //students
    async fetchStudents(context) {
      try{
        let {results} = (await axios.get(`${dbURL}students`)).data
        if(results) {
          context.commit('setStudents', results)
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to retrieve students',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchStudent(context) {
      try{
        let {result} = (await axios.get(`${dbURL}students/${cookies.get('userID')}`)).data
        if(result) {
          context.commit('setStudent', result)
        }
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Error when retrieving booking info',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async cancel(context, payload) {
      try{
        let {msg} = await axios.delete(`${dbURL}students/cancel/${payload.id}`)
          context.dispatch('fetchStudents')
          Swal.fire({
            title: 'Cancel booking',
            text: 'Booking successfully cancelled',
            icon: "success",
            timer: 2000
          }) 
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to cancel booking',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async book(context, payload){
      try{
        let{msg} = (await axios.post(`${dbURL}students/book`, payload)).data
          // context.dispatch('fetchStudents')
          Swal.fire({
            title: 'Book',
            text: msg,
            imageUrl: 'https://i.postimg.cc/66gvLsh8/cheer-cat.gif',
            timer: 3000
          })
      }catch(e) {
        Swal.fire({
          title: 'Error',
          text: 'There was an error when trying to book',
          icon: "error",
          timer: 2000
        }) 
      }
    }

  },
  modules: {
  }
})

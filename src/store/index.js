import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
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
        let {msg} = (await axios.post(`${dbURL}users/register`, payload)).data
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
          //  
          router.push({name: 'login'})
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'There was an error logging in',
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
        sweet({
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
        }else {
          sweet({
            title: 'Retrieving user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
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
          sweet({
            title: 'Update User',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        
      }catch(e) {
        sweet({
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
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
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
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          msg, token, result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back, 
          ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        sweet({
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
        sweet({
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
          sweet({
            title: 'Retrieving course',
            text: 'Course was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
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
          sweet({
            title: 'Add course',
            text: msg,
            icon: "success",
            timer: 2000

          })
      }catch(e) {
        sweet({
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
        console.log(payload);    
          context.dispatch('fetchCourses')
          sweet({
            title: 'Update course',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        
      }catch(e) {
        sweet({
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
          sweet({
            title: 'Delete course',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
      }catch(e) {
        sweet({
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
        sweet({
          title: 'Error',
          text: 'Failed to retrieve students',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchStudent(context, payload) {
      try{
        let {result} = (await axios.get(`${dbURL}students/${payload.id}`)).data
        if(result) {
          context.commit('setStudent', result)
        }else {
          sweet({
            title: 'Retrieving student',
            text: 'Student was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Student was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async cancel(context, payload) {
      try{
        let {msg} = await axios.delete(`${dbURL}students/cancel/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Cancel booking',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
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
          context.dispatch('fetchStudents')
          sweet({
            title: 'Book',
            text: msg,
            icon: "success",
            timer: 2000

          })
      }catch(e) {
        sweet({
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

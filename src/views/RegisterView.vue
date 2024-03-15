<template>
 <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid" id="registerPage">
    <br>
    <h1 class="display-3" id="heading">Register</h1>
    <br /><br />
    <div class="container d-grid justify-content-center w-100 shadow" id="regForm">
      <br /><br />
      <p class="lead fs-5 fw-bold me-auto">Register and book a course today!</p>
      <p>You must be at least 18 and a South African citizen to register</p>
      <label class="me-auto">First Name *</label>
      <input type="text" placeholder="First Name" required v-model="payload.firstName"/>
      <br />
      <label class="me-auto">Last Name *</label>
      <input type="text" placeholder="Last Name" required v-model="payload.lastName" /> <br />
      <label class="me-auto">South African ID number *</label>
      <input type="text" placeholder="ID number"  required v-model="payload.userID"/> <br />
      <label class="me-auto">Email address *</label>
      <input type="text" placeholder="Email" id="pass" required v-model="payload.email"/> 
      <br />
      <label class="me-auto">Create a password *</label>
      <input type="password" placeholder="Must be at least 8 characters" required v-model="payload.pwd" />
      <br />
      <br />
      <div>
        <button class="btn" @click.prevent="validate(payload.userID)">Register</button> <br />
      </div>
      <br />
      <p class="me-auto">
        Already have an account?
        <span>
          <router-link to="/login" id="span">Login</router-link>
        </span>
      </p>
      <br><br>
    </div>
    <br><br>
  </div>
</template>

<script>
import router from '@/router';
export default {
  components: {
    router
  },
  data(){
    return {
        payload: {
            userID: "",
            firstName: "",
            lastName: "",
            email: "",
            pwd: "",
            userRole: "",
        }
    }
  },
  computed: {
    users(){
        return this.$store.state.users
    },

  },
  methods: {
    registerUser() {
      this.$store.dispatch("register", this.payload);
    },
    validate(payload){
      let currYear = +new Date().getFullYear()
      let year = +this.payload.userID.slice(0,2)
      if(year>24){
        year= 1900+ year
      }else{
        year= 2000 +year
      }
      if(currYear-year < 18){
        alert('You are not old enough to register')
        router.push({name: 'home'})
      }else if(this.payload.userID.length <13){
        alert('Please enter a valid 13 digit South African ID number')
      }else if(this.payload.pwd.length < 8){
        alert('Password must be at least 8 characters')
      }else{
        this.registerUser()
      }
    }
  },
};
</script>

<style scoped>
#heading {
  color: #ffffff;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
input {
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #9a2c0a;
}
#regForm {
  background-color: white;
  border-radius: 15px;
  color: #9a2c0a;
}
button {
  color: white;
  background-color: #9A2C0A;
  display: flex;
  
}
#span {
  color: #dc9467;
  font-weight: bold;
  text-decoration: none;
}
#registerPage{
  background: url("https://i.ibb.co/4PG0nyZ/Getty-Images-1361844238-1024x683.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>

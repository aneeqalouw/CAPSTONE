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
      <input type="text" placeholder="First Name" required/>
      <br />
      <label class="me-auto">Last Name *</label>
      <input type="text" placeholder="Last Name" required /> <br />
      <label class="me-auto">South African ID number *</label>
      <input type="text" placeholder="ID number"  required/> <br />
      <label class="me-auto">Date of birth *</label>
      <input type="date" placeholder="yyyy/mm/dd"  required/> <br />
      <label class="me-auto">Email address *</label>
      <input type="text" placeholder="Email" id="pass" required /> 
      <br />
      <label class="me-auto">Create a password *</label>
      <input type="password" placeholder="Must be at least 8 characters" />
      <br />
      <br />
      <div>
        <button class="btn" @click="registerUser">Register</button> <br />
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
export default {
  data(){
    return {
        payload: {
            userID: "",
            firstName: "",
            lastName: "",
            dob: "",
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
    // validate(){
    //   if(this.payload.userID < 13){
    //     alert('Please enter a valid 13 digit South African ID number')
    //   }else{
    //     this.registerUser
    //   }
    // }
  },
  methods: {
    registerUser() {
      this.$store.dispatch("register", this.payload);
    },
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

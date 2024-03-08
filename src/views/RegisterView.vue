<template>
  <br /><br />
  <br /><br />
  <div class="container">
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
      <button class="btn w-50" @click="registerUser">Register</button> <br />
      <br />
      <p class="me-auto">
        Already have an account?
        <span>
          <router-link to="/login" id="span">Login</router-link>
        </span>
      </p>
    </div>
  </div>
  <br /><br />
  <br /><br />
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
    }
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
  color: #9a2c0a;
  font-weight: bold;
}
input {
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #9a2c0a;
}
#regForm {
  border: #9a2c0a solid 0.5px;
  border-radius: 5px;
  padding-inline: 20px;
}
button {
  background-color: #9a2c0a;
  color: white;
}
#span {
  color: #9a2c0a;
  text-decoration: none;
}
</style>

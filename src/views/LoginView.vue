<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid vh-100 " id="loginPage">
    <h1 class="display-2" id="heading">Login</h1>
    <br><br>
    <div class="container d-grid justify-content-center w-75 shadow" id="loginForm">
      <br /><br />
      <label class="me-auto">Email *</label> <br>
      <input type="text" placeholder="Email" v-model="payload.email" class=" w-100" required/> <br> <br>
      <label class="me-auto">Password *</label> <br>
      <input type="password" placeholder="Password" v-model="payload.pwd" class=" w-100" required/> <br> <br>
      <button type="submit" @click="loggingIn" class="btn fw-bold" id="btnLog">Log in</button>
      <br><br>
      <p>
        Dont have an account?
        <span>
          <router-link to="/register" id="regLink">Register</router-link>
        </span>
      </p>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
data(){
     return {
         payload : {
            email: "",
            pwd: ""
        }
    }
},
  methods: {
    loggingIn() {
      this.$store.dispatch("login", this.payload);
    },
  },
  mounted(){
    this.$store.dispatch("fetchUsers")
  }
};
</script>

<style scoped>
#heading {
  color: #ffffff;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#regLink {
  text-decoration: none;
  color: #dc9467;
  font-weight: bold;
}
#loginForm{
    background-color: white;
    border-radius: 15px;
    color: #9a2c0a;
}
input{
    background: transparent;
    border: 0.5px solid;
    border-radius: 5px;
    border-color: #9a2c0a;
}
#loginPage{
  background: url("https://i.ibb.co/4PG0nyZ/Getty-Images-1361844238-1024x683.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
#btnLog{
  color: white;
  background-color: #9A2C0A;
}
</style>

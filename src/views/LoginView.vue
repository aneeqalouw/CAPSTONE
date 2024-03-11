<template>
  <br /><br />
  <div class="container">
    <h1 class="display-3" id="heading">Login</h1>
    <br><br>
    <div class="container d-grid justify-content-center w-75" id="loginForm">
      <br /><br />
      <label class="me-auto">Email *</label> <br>
      <input type="text" placeholder="Email" v-model="payload.email" class=" w-100" required/> <br> <br>
      <label class="me-auto">Password *</label> <br>
      <input type="password" placeholder="Password" v-model="payload.pwd" class=" w-100" required/> <br> <br>
      <button type="submit" @click="loggingIn" class="btn" id="button">Log in</button>
      <br><br>
      <p>
        Dont have an account?
        <span>
          <router-link to="/register" id="regLink">Register</router-link>
        </span>
      </p>
    </div>
  </div>
  <br><br>
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
  color: #9a2c0a;
  font-weight: bold;
}
#regLink {
  text-decoration: none;
  color: #9a2c0a;
}
#button{
    background-color: #9a2c0a;
    color: white;
}
#loginForm{
    border: #9a2c0a solid 0.5px;
    border-radius: 5px;
}
input{
    border: 0.5px solid;
    border-radius: 5px;
    border-color: #9a2c0a;
}
</style>

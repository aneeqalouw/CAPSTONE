<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <h1 class="display-3" id="heading">My account</h1>
  <div class="container d-block" id="account" v-if="user">
    <br><br>
    <div class="row mx-auto">
      <h5>Personal information</h5>
      <div class="border-bottom w-75 mx-auto"></div>
      <label>ID</label> <br>
      <input type="text" :value="user.userID" readonly> <br><br>
      <label>Name</label> <br>
      <input type="text" :value="user.firstName" readonly> <br><br>
      <label>Surname</label> <br>
      <input type="text" :value="user.lastName" readonly> <br><br>
      <label>Email</label> <br>
      <input type="text" :value="user.email" readonly> <br><br>
      <label>Password</label> <br>
      <input type="password" :value="user.pwd" readonly> <br><br>
    </div>
    <br><br>
    <div class="row">
      <router-link to="/updateaccount">
        <button class="btn btn-dark">Edit</button>
      </router-link>
    </div>
    <br><br>
    <div class="row">
      <router-link to="/logout" class="text-danger lead fs-3 fw-bold" style="text-decoration: none;">
        Log out
      </router-link>
    </div>
    <br><br>
    <div class="row d-flex justify-content-center">
      <button class="btn btn-danger fw-bold" @click="deletingUser(user.userID)">Delete account</button>
    </div>
    <br><br>
  </div>

  <!-- <div class="container">
    <h4>My courses</h4>
    <div class="row" v-if="student">
      <h6>Course</h6>
      <p>{{ student.courseID }}</p>
      <br><br>
      <h6>Start date</h6>
      <p>{{ student.startDate }}</p>
      <div class="row">
        <button class="btn btn-danger" @click="deleteStudent(student.studID)">Cancel booking</button>
      </div>
    </div>
    <div v-else>
      <p>Nothing to see here😶</p>
    </div>
  </div> -->
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
export default {
  computed: {
    user() {
      return this.$store.state.user || cookies.get('LegitUser')?.result;
    },
    // student(){
    //   return this.$store.state.student
    // }
  },
  methods: {
    deletingUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    // deleteStudent(studID){
    //   this.$store.dispatch("cancel", {id: studID})
    // },
  },
  mounted(){
    this.$store.dispatch("fetchUser", this.$route.params);
    // this.$store.dispatch("fetchStudent", this.$route.params);
  }
};
</script>

<style scoped>
#heading{
  color: #9a2c0a;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#account{
  border: solid #9a2c0a 0.5px;
  border-radius: 5px;
}
input{
  background: transparent;
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #9a2c0a;
}
button{
  width: 100px;
}
</style>

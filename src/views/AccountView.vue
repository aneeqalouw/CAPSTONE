<template>
  <div class="container" id="account" v-if="user">
    <label>ID</label>
    <input type="text" :value="user.userID" readonly>
    <label>Name</label>
    <input type="text" :value="user.firstName" readonly>
    <label>Surname</label>
    <input type="text" :value="user.lastName" readonly>
    <label>Email</label>
    <input type="text" :value="user.email" readonly>
    <label>Password</label>
    <input type="password" :value="user.pwd" readonly>
    <br><br>
    <div class="row">
      <router-link to="/updateaccount">
        <button>Update account</button>
      </router-link>
    </div>
    <div class="row">
      <router-link to="/logout" class="text-danger" style="text-decoration: none;">
        Log out
      </router-link>
    </div>
    <br><br>
    <div class="row">
      <button class="btn btn-danger" @click="deletingUser(user.userID)">Delete account</button>
    </div>
  </div>
  <div class="container">
    <h4>My courses</h4>
    <div class="row" v-if="student">
      <h6>Course</h6>
      <p>{{ student.courseID }}</p>
      <br><br>
      <h6>Start date</h6>
      <p>{{ student.startDate }}</p>
    </div>
    <div class="row">
      <button class="btn btn-danger" @click="deleteStudent(student.studID)">Cancel booking</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.user;
    },
    students(){
      return this.$store.state.students
    }
  },
  methods: {
    deleteingUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    deleteStudent(studID){
      this.$store.dispatch("cancel", {id: studID})
    },
  },
  mounted(){
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchStudents");
  }
};
</script>

<style scoped>
#account{
  border: solid #9a2c0a 0.5px;
  border-radius: 5px;
}
</style>

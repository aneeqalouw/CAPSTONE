<template>
  <div class="container">
    <p>hi</p>
    <h2>Admin</h2>
    <br /><br />
    <div class="row">
      <h4>Courses</h4>
      <br /><br />
      <div class="row">
        
        <button
          id="allButtons"
          type="button"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#addCourseModalTarget"
        >
          Add new course
        </button>
      </div>
      <div class="row table-responsive">
          <table>
            <thead>
                <tr>
                    <th>courseID</th>
                    <th>courseName</th>
                    <th>courseDuration</th>
                    <th>courseDesc</th>
                    <th>coursePrice</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="courses">
                <tr v-for="course in courses" :key="course.courseID">
                    <td>{{ course.courseID }}</td>
                    <td>{{ course.courseName }}</td>
                    <td>{{ course.courseDuration }}</td>
                    <td>{{ course.courseDesc }}</td>
                    <td>R{{ course.coursePrice }}</td>
                    <td>
                        <UpdateCourse updateCourseModal="updateCourseModalTarget"/>
                        <button class="btn" @click="deleteCourse(course)">Delete</button>
                    </td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
import AddCourse from "@/components/AddCourse.vue";
import UpdateUser from "@/components/UpdateUser.vue";
import UpdateCourse from "@/components/UpdateCourse.vue";
import AddStudent from '@/components/AddStudent'
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: {
    AddUser,
    // AddProduct,
    UpdateUser,
    // UpdateProduct,
    SpinnerComp
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    courses() {
      return this.$store.state.courses;
    },
  },
  methods: {
    //user methods
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', {id: userID});
    },
    updateUser(user){
      let updatingUser = {
        userID : user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        email: user.email,
        pwd: user.pwd,
        userRole: user.userRole
      }
      this.$store.dispatch('updateUser', {id: user.userID, data: updatingUser})
    },
    //course methods
    deletingCourse(payload){
      this.$store.dispatch('deleteCourse', payload)
    },
    UpdateCourse(course){
      let updatingCourse = {
        courseID : course.courseID,
        courseName: course.courseName,
        courseDuration: course.courseDuration,
        courseDesc: course.courseDesc,
        coursePrice: course.coursePrice
      }
      this.$store.dispatch('updateCourse', {id: course.courseID, data: updatingCourse})
    }

  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchStudents")
  },
};
</script>

<style scoped></style>

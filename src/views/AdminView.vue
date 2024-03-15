<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <br><br>
  <div class="container">
    <h1 class="display-3" id="heading">Admin</h1>
    <br /><br />

    <!-- **courses -->
    <div class="container ">
      <div class="row">
        <h4>Courses</h4>
        <br /><br />
        <div class="row">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn border-black"
            data-bs-toggle="modal"
            data-bs-target="#addCourse"
          >
            Add new course
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="addCourse"
            tabindex="-1"
            aria-labelledby="addCourse"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="addCourse">
                    Add new course
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    placeholder="courseID"
                    v-model="coursePayload.courseID"
                  />
                  <input
                    type="text"
                    placeholder="courseName"
                    v-model="coursePayload.courseName"
                  />
                  <input
                    type="text"
                    placeholder="courseDuration"
                    v-model="coursePayload.courseDuration"
                  />
                  <input
                    type="text"
                    placeholder="courseDesc"
                    v-model="coursePayload.courseDesc"
                  />
                  <input
                    type="text"
                    placeholder="coursePrice"
                    v-model="coursePayload.coursePrice"
                  />
                </div>
                <div class="modal-footer">
                  <butt
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </butt>
                  <button
                    type="submit"
                    @click.prevent="addingCourse"
                    class="btn btn-dark"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row table-responsive">
          <table class="table">
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
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-dark mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#updateCourse"
                  >
                    Edit
                  </button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="updateCourse"
                    tabindex="-1"
                    aria-labelledby="updateCourse"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="updateCourse">
                            Edit course
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <input
                            type="text"
                            placeholder="courseID"
                            v-model="coursePayload.courseID"
                          />
                          <input
                            type="text"
                            placeholder="courseName"
                            v-model="coursePayload.courseName"
                          />
                          <input
                            type="text"
                            placeholder="courseDuration"
                            v-model="coursePayload.courseDuration"
                          />
                          <input
                            type="text"
                            placeholder="courseDesc"
                            v-model="coursePayload.courseDesc"
                          />
                          <input
                            type="text"
                            placeholder="coursePrice"
                            v-model="coursePayload.coursePrice"
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            @click.prevent="updatingCourse(coursePayload)"
                            class="btn btn-dark"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-danger" @click="deletingCourse(course)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <div v-else>
              <SpinnerComp></SpinnerComp>
            </div>
          </table>
        </div>
      </div>

      <!-- **users -->
      <br /><br />
      <div class="container">
        <div class="row">
          <h4>Users</h4>
        </div>
        <br /><br />
        <div class="row">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn border-black"
            data-bs-toggle="modal"
            data-bs-target="#addUser"
          >
            Add new user
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="addUser"
            tabindex="-1"
            aria-labelledby="addUser"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="addUser">Add new user</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    placeholder="userID"
                    v-model="userPayload.userID"
                  />
                  <input
                    type="text"
                    placeholder="firstName"
                    v-model="userPayload.firstName"
                  />
                  <input
                    type="text"
                    placeholder="lastName"
                    v-model="userPayload.lastName"
                  />
                  <input
                    type="text"
                    placeholder="email"
                    v-model="userPayload.email"
                  />
                  <input
                    type="password"
                    placeholder="password"
                    v-model="userPayload.pwd"
                  />
                  <input
                    type="text"
                    placeholder="role"
                    v-model="userPayload.userRole"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    @click.prevent="registerUser"
                    class="btn btn-dark"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>userID</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="users">
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.userRole }}</td>
                <td >
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-dark mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#updateUser"
                  >
                    Edit
                  </button>

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="updateUser"
                    tabindex="-1"
                    aria-labelledby="updateUser"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="updateUser">
                            Edit user
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <input
                            type="text"
                            placeholder="userID"
                            v-model="userPayload.userID"
                          />
                          <input
                            type="text"
                            placeholder="firstName"
                            v-model="userPayload.firstName"
                          />
                          <input
                            type="text"
                            placeholder="lastName"
                            v-model="userPayload.lastName"
                          />
                          <input
                            type="text"
                            placeholder="email"
                            v-model="userPayload.email"
                          />
                          <input
                            type="password"
                            placeholder="password"
                            v-model="userPayload.pwd"
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            @click.prevent="updatingUser(userPayload)"
                            class="btn btn-dark"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button @click="deletingUser(user.userID)" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <div v-else>
              <SpinnerComp></SpinnerComp>
            </div>
          </table>
        </div>
      </div>
      <br /><br />

      <!-- **students -->
      <div class="container">
        <div class="row">
          <h4>Students</h4>
        </div>
        <div class="row">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn border-black"
            data-bs-toggle="modal"
            data-bs-target="#addStudent"
          >
            Add new student
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="addStudent"
            tabindex="-1"
            aria-labelledby="addStudent"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="addStudent">
                    Add new student
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <input type="text" placeholder="courseID" v-model="studentPayload.courseID"> <br> <br>
                  <input type="date" placeholder="startDate" v-model="studentPayload.startDate"> <br> <br>
                  <input type="text" placeholder="userID" v-model="studentPayload.userID">
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" @click.prevent="addStudent" class="btn btn-dark">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>studID</th>
                <th>userID</th>
                <th>courseID</th>
                <th>startDate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="students">
              <tr v-for="student in students" :key="student.studID">
                <td>{{ student.studID }}</td>
                <td>{{ student.userID }}</td>
                <td>{{ student.courseID }}</td>
                <td>{{ student.startDate }}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteStudent(student.studID)">Remove</button>
                </td>
              </tr>
            </tbody>
            <div v-else>
              <SpinnerComp></SpinnerComp>
            </div>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import { useCookies } from "vue3-cookies";
const cookies = useCookies()
export default {
  components: {
    SpinnerComp,
  },
  data() {
    return {
      coursePayload: {
        courseID: "",
        courseName: "",
        courseDuration: "",
        courseDesc: "",
        coursePrice: null,
      },
      userPayload: {
        userID: "",
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        userRole: "",
      },
      studentPayload: {
        studID: null,
        startDate: "",
        courseID: "",
        userID: ""
      }
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    courses() {
      return this.$store.state.courses;
    },
    students(){
      return this.$store.state.students
    },
    // checkUser(){
    //   cookies.get('LegitUser')
    //   if(user.userRole != 'admin'){
    //     alert('Only admins can view this page')
    //   }
    // }
  },
  methods: {

    //user methods
    registerUser() {
      this.$store.dispatch("register", this.userPayload);
    },
    deletingUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    updatingUser() {
      this.$store.dispatch("updateUser", this.userPayload);
    },

    //course methods
    updatingCourse() {
      this.$store.dispatch("updateCourse", this.coursePayload);
    },
    addingCourse() {
      this.$store.dispatch("addCourse", this.coursePayload);
    },
    deletingCourse(payload) {
      this.$store.dispatch("deleteCourse", payload);
    },
    updateCourse(course) {
      let updatingCourse = {
        courseID: course.courseID,
        courseName: course.courseName,
        courseDuration: course.courseDuration,
        courseDesc: course.courseDesc,
        coursePrice: course.coursePrice,
      };
      this.$store.dispatch("updateCourse", updatingCourse);
    },

    // student methods
    addStudent(){
      this.$store.dispatch("book", this.studentPayload)
    },
    deleteStudent(studID){
      this.$store.dispatch("cancel", {id: studID})
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchStudents");
  },
};
</script>

<style scoped>
#heading{
  color: #9a2c0a;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

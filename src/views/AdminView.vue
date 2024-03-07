<template>
  <div class="container">
    <h2>Admin</h2>
    <br /><br />
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
                <h1 class="modal-title fs-5" id="addCourse">Add new course</h1>
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
                  v-model="payload.courseID"
                />
                <input
                  type="text"
                  placeholder="courseName"
                  v-model="payload.courseName"
                />
                <input
                  type="text"
                  placeholder="courseDuration"
                  v-model="payload.courseDuration"
                />
                <input
                  type="text"
                  placeholder="courseDesc"
                  v-model="payload.courseDesc"
                />
                <input
                  type="text"
                  placeholder="coursePrice"
                  v-model="payload.coursePrice"
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
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
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
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn"
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
                          v-model="payload.courseID"
                        />
                        <input
                          type="text"
                          placeholder="courseName"
                          v-model="payload.courseName"
                        />
                        <input
                          type="text"
                          placeholder="courseDuration"
                          v-model="payload.courseDuration"
                        />
                        <input
                          type="text"
                          placeholder="courseDesc"
                          v-model="payload.courseDesc"
                        />
                        <input
                          type="text"
                          placeholder="coursePrice"
                          v-model="payload.coursePrice"
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
                        <button type="submit" @click.prevent="updatingCourse(payload)" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn" @click="deletingCourse(course)">
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
      <div class="row">
        
      </div>
    </div>
  </div>
</template>

<script>
// import AddUser from "@/components/AddUser.vue";
// import UpdateUser from "@/components/UpdateUser.vue";
// import UpdateCourse from "@/components/UpdateCourse.vue";
// import AddStudent from '@/components/AddStudent'
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: {
    SpinnerComp,
  },
  props: ["addCourseModal", "updateCourseModal"],
  data() {
    return {
      payload: {
        courseID: "",
        courseName: "",
        courseDuration: "",
        courseDesc: "",
        coursePrice: null,
      },
    };
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
    // deleteUser(userID) {
    //   this.$store.dispatch("deleteUser", { id: userID });
    // },
    // updateUser(user) {
    //   let updatingUser = {
    //     userID: user.userID,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     dob: user.dob,
    //     email: user.email,
    //     pwd: user.pwd,
    //     userRole: user.userRole,
    //   };
    //   this.$store.dispatch("updateUser", {
    //     id: user.userID,
    //     data: updatingUser,
    //   });
    // },

    //course methods
    updatingCourse() {
      this.$store.dispatch("updateCourse", this.payload);
    },
    addingCourse() {
      this.$store.dispatch("addCourse", this.payload);
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
      this.$store.dispatch("updateCourse", {
        id: course.courseID,
        data: updatingCourse,
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchStudents");
  },
};
</script>

<style scoped></style>

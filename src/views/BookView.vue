<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid vh-100" id="bookPage">
    <h1 class="display-2 fw-bold" id="heading">Book</h1>
    <br /><br />
    <div class="container w-75 shadow" id="booking">
      <br />
      <label class="fs-4">Course *</label> <br>
      <div class="row d-flex justify-content-center">
        <select class="form-select w-50" aria-label="Default select example" name="courseData" id="courseData" v-model="selectedCourse">
          <option v-for="course in courses" :key="course.courseID" :value="course.courseID" >
            {{ course.courseName }}
          </option>
      </select>
      </div>
      <br /><br />

       <!-- ** -->
      <label class=" fs-4">Start date *</label>
      <div class="row d-flex justify-content-center">
        <select class="form-select w-50" aria-label="Default select example" name="dateData" id="dateData" v-model="selectedDate">
          <option v-for="date in dates" :value="date">
            {{ date }}
          </option>
      </select>
      </div>
      <br /><br />
      <button class="btn w-50 fw-bold" @click.prevent="addStudent" id="btnBook">
        Book your spot
      </button>
      <br /><br />
      <br><br>
    </div>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
export default {
  data() {
    return {
      dates: [
        '2024/04/04', '2024/15/06', '2024/09/26', '2024/12/02'
      ],
      selectedCourse: "",
      selectedDate: "",
      payload: {
        studID: null,
        startDate: this.selectedDate,
        courseID: this.selectedCourse,
        userID: this.loggedUser?.result.userID,
      },
    };
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
    courses() {
      return this.$store.state.courses;
    },
    loggedUser() {
      return cookies.get('LegitUser')
    }
  },
  methods: {
    addStudent() {
      this.$store.dispatch("book", this.payload);
    }
   },
  mounted() {
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchStudents");
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
#courseData{
  border: #9A2C0A solid 0.5px;
}
#dateData{
  border: #9A2C0A solid 0.5px;
}
#booking {
  background-color: white;
  border-radius: 15px;
  color: #9a2c0a;
}
a {
  text-decoration: none;
}
#bookPage{
  background: url("https://i.ibb.co/4PG0nyZ/Getty-Images-1361844238-1024x683.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
#btnBook{
  color: white;
  background-color: #9A2C0A;
}
</style>

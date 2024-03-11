<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid vh-100" id="bookPage">
    <h1 class="display-2 fw-bold" id="heading">Book</h1>
    <br /><br />
    <div class="container w-75 shadow" id="booking">
      <br />
      <label class="fs-4">Course *</label> <br>
      <div class="dropdown">
        <button
          id="drop"
          class="btn dropdown-toggle w-25"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select course
        </button>
        <ul
          class="dropdown-menu"
          
        >
          <div class="form-check" v-for="course in courses"
          :key="course.courseID">
            <input
              :value="course.courseID"
              class="form-check-input"
              type="radio"
              :name="course.courseID"
              :id="course.courseName"
            />
            <label class="form-check-label" :for="course.courseName">
              {{ course.courseName }}
            </label>
          </div>
        </ul>
      </div>
      <br /><br />

       <!-- ** -->
      <label class=" fs-4">Start date *</label>
      <div class="dropdown">
        <button
          id="drop"
          class="btn dropdown-toggle w-25"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select start date
        </button>
        <ul
          class="dropdown-menu"
        >
          <div class="form-check">
            <input
               value="04/04/2024"
              class="form-check-input"
              type="radio"
              name="startDate"
              id="startDate"
            />
            <label class="form-check-label">
              4 April 2024
            </label>
          </div>
          <div class="form-check">
            <input
               value="26/06/2024"
              class="form-check-input"
              type="radio"
              name="startDate"
              id="startDate"
            />
            <label class="form-check-label">
              26 June 2024
            </label>
          </div>
          <div class="form-check">
            <input
               value="15/09/2024"
              class="form-check-input"
              type="radio"
              name="startDate"
              id="startDate"
            />
            <label class="form-check-label">
              15 September 2024
            </label>
          </div>
          <div class="form-check">
            <input
               value="27/11/2024"
              class="form-check-input"
              type="radio"
              name="startDate"
              id="startDate"
            />
            <label class="form-check-label">
              27 November 2024
            </label>
          </div>
        </ul>
      </div>
      <br /><br />
      <button class="btn w-25 fw-bold" @click="addStudent(payload)" id="btnBook">
        Book your spot
      </button>
      <br /><br />
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        studID: null,
        startDate: "",
        courseID: "",
        userID: "",
      },
      // coursePayload: {
      //   courseID: "",
      //   courseName: "",
      //   courseDuration: "",
      //   courseDesc: "",
      //   coursePrice: null
      // }
    };
  },
  computed: {
    students() {
      return this.$store.state.students;
    },
    courses() {
      return this.$store.state.courses;
    },
  },
  methods: {
    addStudent() {
      this.$store.dispatch("book", this.payload);
    },
  },
  mounted() {
    this.$store.dispatch("fetchCourses");
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
#drop {
  border: #9a2c0a solid 0.5px;
  border-radius: 5px;
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

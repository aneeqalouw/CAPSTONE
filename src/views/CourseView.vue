<template>
 <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid" id="coursePage">
    <h1 class="display-3" id="heading">Course details</h1>
    <br /><br />
    <div class="container shadow" id="courseDetails" v-if="course">
      <br><br>
      <h4>{{ course.courseName }}</h4>
      <div class="border-bottom w-50 mx-auto"></div>
      <br />
      <p>{{ course.courseDesc }}</p>
      <br />
      <p class="lead fw-bolder">R{{ course.coursePrice }}</p>
      <br />
      <h5>What you will get</h5>
      <ul>
        <li>Classroom training from 9:00 to 16:00 Monday to Thursday</li>
        <li>Textbooks and help guides</li>
        <li>Internationally recognised qualification after completion</li>
      </ul>
      <br />
      <router-link to="/book">
        <button class="btn">Book your spot</button>
      </router-link>
      <br><br>
      <br><br>
    </div>
    <div v-else>
      <SpinnerComp></SpinnerComp>
    </div>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: {
    SpinnerComp,
  },
  computed: {
    course() {
      return this.$store.state.course;
    },
  },
  mounted() {
    this.$store.dispatch("fetchCourse", this.$route.params);
  },
};
</script>

<style scoped>
button {
  background-color: #9a2c0a;
  color: white;
}
#heading {
  color: #ffff;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#courseDetails {
  background-color: #ffff;
  border-radius: 5px;
 
}
ul{
  list-style-position: inside;
}
#coursePage{
  background: url("https://i.ibb.co/4PG0nyZ/Getty-Images-1361844238-1024x683.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  color: #9a2c0a;
}
</style>

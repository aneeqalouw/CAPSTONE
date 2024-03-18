<template>
 <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container">
    <h1 class="display-3" id="heading">Course details</h1>
    <br /><br />
    <div class="container" id="courseDetails" v-if="course">
      <br><br>
      <h4>{{ course.courseName }}</h4>
      <br /><br />
      <p>{{ course.courseDesc }}</p>
      <br /><br />
      <p>R{{ course.coursePrice }}</p>
      <br /><br />
      <h5>What you will get</h5>
      <ul>
        <li>Classroom training from 9:00 to 16:00 Monday to Thursday</li>
        <li>Textbooks and help guides</li>
        <li>Internationally recognised qualification after completion</li>
      </ul>
      <br /><br />
      <router-link to="/book">
        <button class="btn">Book your spot</button>
      </router-link>
      <br><br>
    </div>
    <div v-else>
      <SpinnerComp></SpinnerComp>
    </div>
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
  color: #9a2c0a;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#courseDetails {
  border: #9a2c0a solid 0.5px;
  border-radius: 5px;
  /* width: 50rem; */
}
ul{
  list-style-position: inside;
}
</style>

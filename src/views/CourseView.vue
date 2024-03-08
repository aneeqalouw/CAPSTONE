<template>
  <br /><br />
  <br /><br />
  <div class="container">
    <h1 class="display-3" id="heading">Course details</h1>
    <br /><br />
    <div class="container" id="courseDetails" v-if="course">
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
      <br><br>
      <router-link to="/book">
        <button class="btn">Book your spot</button>
      </router-link>
    </div>
    <div v-else>
        <SpinnerComp></SpinnerComp>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components:{
    SpinnerComp
  },
  computed: {
    courses() {
      return this.$store.state.courses;
    },
  },
  mounted() {
    this.$store.dispatch("fetchCourses");
  },
};
</script>

<style scoped>
    button{
        background-color: #9A2C0A;
        color: white;
    }
    #heading{
        color: #9A2C0A;
        font-weight: bold;
    }
    #courseDetails{
        border: #9A2C0A solid 0.5px;
        border-radius: 5px;
        width: 50rem;
    }
</style>

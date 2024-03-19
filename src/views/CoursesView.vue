<template>
  <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet">
  <div class="container-fluid" id="coursesPage">
    <h1 class="display-4" id="heading">Our Courses</h1>
    <div v-if="courses">
      <div class="row d-flex mx-auto text-white w-75 p-3" v-for="course in courses" :key="course.courseID" id="courseContainer">
        <div class="col">
          <h5>{{ course.courseName }}</h5>
          <p>{{ course.courseDesc }}</p>
          <div class="row">
            <router-link :to="{name: 'course', params: {id: course.courseID}}">
                <button class="btn" style="background-color: #9A2C0A; color: white;">
                    View course
                </button>
            </router-link>
          </div>
        </div>
        <div class="col">
            <p class="lead fs-5">{{ course.courseDuration }}</p>
            R {{ course.coursePrice }}
        </div>
      </div>
    </div>
    <div v-else>
      <SpinnerComp></SpinnerComp>
    </div>
    <br><br>
  </div>
</template>

<script>
import CourseView from './CourseView.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  components: {
    CourseView,
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
#heading{
  color: #ffffff;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#courseContainer{
    background-color: #F1A778;
     /* height: 180px;
    width: 700px; */
    border-radius: 30px; 
    margin-block: 50px; 
}
#coursesPage{
  background: url("https://i.ibb.co/4PG0nyZ/Getty-Images-1361844238-1024x683.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  color: white;
}
</style>

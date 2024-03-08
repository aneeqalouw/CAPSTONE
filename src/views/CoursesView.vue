<template>
  <br /><br />
  <br /><br />
  <h1 class="display-4 d-flex justify-content-center" id="heading">Our Courses</h1>
  <div class="container d-flex justify-content-center">
    <div v-if="courses">
      <div class="row text-white" v-for="course in courses" :key="course.courseID" id="courseContainer">
        <div class="col">
            <br>
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
            <br>
            <p class="lead fs-5">{{ course.courseDuration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  color: #9A2C0A ;
  font-weight: bold;
}
    #courseContainer{
        background-color: #F1A778;
        height: 180px;
        width: 700px;
        border-radius: 30px;
        margin-block: 50px;
    }
</style>

<template>
  <br /><br />
  <br /><br />
  <div class="container">
    <h1 class="display-3" id="heading">Book</h1>
    <br /><br />
    <div class="container">
      <label>Course</label> <br> <br>
      <div class="dropdown">
        <button
          id="drop"
          class="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select course
        </button>
        <ul class="dropdown-menu">
          <li><option value="C01" class=" dropdown-item">TEFL</option></li>
          <li><option value="C02" class=" dropdown-item">TEFL + Japanese</option></li>
          <li><option value="C03" class=" dropdown-item">TEFL + Chinese</option></li>
          <li><option value="C04" class=" dropdown-item">TEFL + Korean</option></li>
          <li><option value="C05" class=" dropdown-item">TEFL + Thai</option></li>
          <li><option value="C06" class=" dropdown-item">TEFL + Spanish</option></li>
        </ul>
      </div>
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
        userID: ""
      }
    };
  },
  computed: {
    students(){
      return this.$store.state.students
    }
  },
  methods: {
    addStudent(){
      this.$store.dispatch("book", this.payload)
    }
  },
  mounted() {
    this.$store.dispatch("fetchStudents");
  },
};
</script>

<style scoped>
#heading {
  color: #9a2c0a;
  font-weight: bold;
}
#drop{
    border: #9a2c0a solid 0.5px;
    border-radius: 5px;
}
</style>

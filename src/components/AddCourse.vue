<template>
  <!-- <div> -->
    <!-- Modal -->
    <div
        class="modal fade"
        :id="addCourseModal"
        tabindex="-1"
        aria-labelledby="addCourse"
        aria-hidden="true"
    >
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="addCourse">Add new course</h1>
            <button
                id="allButtons"
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body">
            <div>
                <input type="text" placeholder="courseID" v-model="payload.courseID" class="bg-transparent border-dark text-white">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Name" v-model="payload.courseName" class="bg-transparent border-dar text-white">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Category" v-model="payload.category" class="bg-transparent border-dark text-white">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Image link" v-model="payload.image" class="bg-transparent border-dark text-white">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Price" v-model="payload.price" class="bg-transparent border-dark text-white">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Description" v-model="payload.description" class="bg-transparent border-dark text-white">
            </div>
            <br><br>
        </div>
            </div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Close
            </button>
            <button type="submit" @click.prevent="addingCourse" class="btn" id="allButtons">Save changes</button>
            </div>
        </div>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
    props:['addCourseModal'],
    data(){
        return{
            payload: {
                courseID: '',
                courseName: '',
                courseDuration: '',
                courseDesc: '',
                coursePrice: null
            }
        }
    },
    methods: {
        addingCourse(){
            this.$store.dispatch('addCourse', this.payload)
        }
    }
};
</script>

<style scoped></style>

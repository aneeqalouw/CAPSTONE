<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap"
    rel="stylesheet"
  />
  <h1 class="display-3" id="heading">My account</h1>
  <br><br>

  <div class="container" id="account" v-if="user">
    <br /><br />
    <div class="row mx-auto">
      <h5 class="w-25 me-auto fw-bolder">Personal information</h5>
      <div class="border-bottom w-100 mx-auto"></div>
      <div class="row">
        <p class="lead" id="label">ID</p>
        <input type="text" :value="user.userID" readonly />
        <p class="lead" id="label">Name</p>
        <input type="text" :value="user.firstName" readonly />
        <p class="lead" id="label">Surname</p>
        <input type="text" :value="user.lastName" readonly />
      </div>
    </div>
    <br /><br />
    <br /><br />
    <br /><br />
    <div class="row mx-auto">
      <h5 class="w-25 me-auto fw-bolder">Account information</h5>
      <div class="border-bottom w-100 mx-auto"></div>
      <div class="row d-flex">
        <br /><br />
        <p class="lead" id="label">Email</p>
        <br />
        <input type="text" :value="user.email" readonly />
        <br /><br />
      </div>
    </div>
    <br /><br />

    
    <!-- **EDIT ACC MODAL -->
    <div class="row ms-auto my-3">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#editAccount"
      >
        Edit account
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="editAccount"
        tabindex="-1"
        aria-labelledby="editAccount"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="editAccount">
                Update account details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="lead">Name</p>
              <input type="text" :placeholder="user.firstName" v-model="payload.firstName">
              <p class="lead">Surname</p>
              <input type="text" :placeholder="user.lastName" v-model="payload.lastName">
              <p class="lead">Email</p>
              <input type="text" :placeholder="user.email" v-model="payload.email">
              <p class="lead">Email</p>
              <input type="password" :placeholder="user.pwd" v-model="payload.pwd">
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success" @click.prevent="updatingUser(payload)">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <div class="border-bottom"></div>
    <div class="row my-3">
      <router-link
        to="/logout"
        class="text-danger lead fs-4 mx-1"
        style="text-decoration: none; text-align: start; font-weight: 900;"
      >
        Log out
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="#D71616"/>
        </svg>
      </router-link>
    </div>
    <br><br>


    <div class="border-bottom border-secondary"></div>
    <!-- **DELETE WARNING MODAL -->
    <div class="row ms-auto my-3">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-danger fw-bold "
        data-bs-toggle="modal"
        data-bs-target="#deleteAccount"
      >
        Delete account
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="deleteAccount"
        tabindex="-1"
        aria-labelledby="deleteAccount"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="deleteAccount">
                Delete account
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                <div class="row d-flex justify-content-center">❗</div>
                Are you sure you wan to permanantly delete your account? You
                will no longer be able to book a course with us
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-danger fw-bold"
                @click.prevent="deletingUser(user.userID)"
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
  <div class="row" v-else>
    <SpinnerComp></SpinnerComp>
  </div>
  <br /><br />
  <br><br>


  <!-- **my courses -->
  <div class="container">
    <h3 class=" display-5 fw-bold">My courses</h3>
    <br><br>
    <div class="row" v-if="student">
      <div class="row table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Course</th>
              <th>Start date</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody v-if="student">
            <tr>
              <td>{{ student.studID }}</td>
              <td>{{ student.courseName }}</td>
              <td>{{ student.startDate }}</td>
              <td>
                <!-- Button trigger modal -->
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#cancel">
                    Cancel booking
                  </button>
                  <!-- Modal -->
                  <div class="modal fade" id="cancel" tabindex="-1" aria-labelledby="cancel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="cancel">Cancel booking?</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="row d-flex justify-content-center">❗</div>
                          <p>Are you sure you want to cancel this booking?</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-danger" @click="cancelBooking(student.studID)">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row" v-else>
      <p>Nothing to see here 😶</p> <br>
      <router-link to="/book" style="text-decoration: none; color: #9a2c0a; font-weight: bold;">Book a course</router-link>
    </div>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import SpinnerComp from "@/components/SpinnerComp.vue";
import router from "@/router";
export default {
  components: {
    SpinnerComp
  },
  data(){
    return {
      payload: {
        userID: cookies.get('LegitUser')?.result?.userID,
        firstName: "",
        lastName: "",
        email: "",
        pwd: ""
      },
    }
  },
  computed: {
    user() {
      return cookies.get('LegitUser')?.result;
    },
    student(){
      return this.$store.state.student
    }
  },
  methods: {
    deletingUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    updatingUser() {
      this.$store.dispatch("updateUser", this.payload);
    },
    cancelBooking(studID){
      this.$store.dispatch("cancel", {id: studID})
    }
  },
  mounted() {
    this.$store.dispatch("fetchStudent");
    
  },
};
</script>

<style scoped>
#heading {
  color: #9a2c0a;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#account {
  border: solid #9a2c0a 0.5px;
  border-radius: 5px;
  padding: 10px;
}
input {
  background: transparent;
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #9a2c0a;
}
button {
  width: 150px;
}
#label {
  text-align: start;
}
</style>

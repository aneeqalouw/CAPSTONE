<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap"
    rel="stylesheet"
  />
  <h1 class="display-3" id="heading">My account</h1>
  <div class="container" id="account" v-if="user">
    <br /><br />
    <div class="row mx-auto">
      <h5 class="w-25 me-auto fw-bolder">Personal information</h5>
      <div class="border-bottom w-100 mx-auto"></div>
      <div class="row">
        <p class="lead" id="label">ID</p>
        <input type="text" :value="user.userID" readonly />
        <p class="lead" id="label">Name</p>
        <input type="text" :value="user.firstName" readonly class="" />
        <p class="lead" id="label">Surname</p>
        <input type="text" :value="user.lastName" readonly class="" />
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
        <input type="text" :value="user.email" readonly class="" />
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
        Edit
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
    <div class="border-bottom"></div>
    <div class="row my-3">
      <router-link
        to="/logout"
        class="text-danger lead fs-4 fw-bolder mx-1"
        style="text-decoration: none; text-align: start;"
      >
        Log out
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
                Permanantly delete your account? You
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
  <br /><br />
  <br><br>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  data(){
    return {
      payload: {
        // userID: "",
        firstName: "",
        lastName: "",
        email: ""
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user || cookies.get('LegitUser')?.result;
    },
  },
  methods: {
    deletingUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    updatingUser() {
      this.$store.dispatch("updateUser", this.payload);
    }
  },
  mounted() {
    this.$store.dispatch("fetchUser", this.$route.params);
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

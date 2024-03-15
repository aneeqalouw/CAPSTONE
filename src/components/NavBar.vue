<template>
  <div>
    <div class="row d-block justify-content-center">
      <img
        src="https://i.ibb.co/Sy3gnbq/abroadacademy-logo.png"
        alt="Logo"
        id="logo"
      />
    </div>
    <nav class="navbar navbar-expand-lg bg-white shadow">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <br /><br />
          <ul class="navbar-nav mx-auto gap-3 mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/courses">Courses</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/book">Book</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">Contact us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">Login/register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/account">Me</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
nav a {
  text-decoration: none;
  color: black;
}
nav a:hover {
  color: #f1a778;
}
a {
  text-decoration: none;
}
#navToggle {
  border-color: #9a2c0a;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #9a2c0a;
}
#logo {
  height: 3rem;
  width: 8rem;
}
#loginbtn a:hover {
  color: white;
}
#loginbtn:hover {
  background-color: #9a2c0a;
}
</style>

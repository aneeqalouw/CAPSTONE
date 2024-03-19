<template>
  <div>
    <div class="row d-block justify-content-center">
      <router-link to="/">
        <img
          src="https://i.ibb.co/Sy3gnbq/abroadacademy-logo.png"
          alt="Logo"
          id="logo"
        />
      </router-link>
    </div>
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
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
              <router-link to="/account" >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" fill="black"/>
                </svg>
                
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { useCookies } from "vue3-cookies";
// const  {cookies}  = useCookies();
// let role = cookies.get('userRole')
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

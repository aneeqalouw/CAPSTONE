<template>
  <div>
  <nav class="navbar bg-white shadow fixed-top">
  <div class="container-fluid">
    <router-link to="/">
      <img src="https://i.ibb.co/8szRnQW/abroadacademy-logo.png" alt="Logo" id="logo">
    </router-link>
    <div class="ms-auto mx-3">
      <router-link to="/login">
        <button class="btn rounded-5" id="loginbtn">Register/Login</button>
      </router-link>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">  
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About us</router-link>
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
        </ul>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#loginbtn{
  border: #9A2C0A solid 0.5px;
  color: #9A2C0A;
}
#logo{
  height: 3rem;
  width: 8rem;
}
</style>

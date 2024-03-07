<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-white shadow" data-bs-theme="light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="#" alt="Logo">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav gap-2">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">Register/Login</router-link>
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
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

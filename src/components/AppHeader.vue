<script>
import logo from '../assets/logo.svg';

export default {
  components: {
  },
  data() {
    return {
      logo
    }
  }
}

</script>

<template>

  <header>
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img :src="logo" alt="LOGO">
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item fs-5">
              <router-link to="/" class="nav-link">Home</router-link> <!-- Example -->
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li> -->
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </header>

</template>

<style></style>
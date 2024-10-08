<script>
import logo from '../assets/logo.svg';
import { store } from '../store';

export default {
  setup() {
    return { store }
  },
  data() {
    return {
      logo
    }
  },
  methods: {
    logoutUser() {
      store.logout();
      this.$router.push('/login');
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

          </ul>
          <ul class="navbar-nav ms-auto">
            <!-- Controlla se l'utente è autenticato -->
            <li v-if="store.isAuthenticated" class="nav-item d-flex">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
              <button class="nav-link" @click="logoutUser">Logout</button> <!-- Da scegliere se tenere o meno-->
            </li>
            <li v-else class="nav-item d-flex">
              <router-link class="nav-link" to="/register">Register</router-link>
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
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
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
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item d-flex">
              <a :href="appUrl" class="nav-link">Area Utente</a>
            </li>
          </ul>
          <form class="d-flex" role="search" @submit.prevent="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn" type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logo from '../assets/logo.svg';
import { store } from '../store';

export default {
  setup() {
    return { logo, store };
  },
  data() {
    return {
      appUrl: store.appUrl,
    }
  },
  methods: {
    logoutUser() {
      store.logout()
        .then(response => {
          console.log('Logout riuscito:', response.data);
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Errore durante il logout:', error.response.data);
        });
    },
    search() {
      // Funzione per gestire la ricerca
      console.log("Searching...");
    }
  }
};
</script>

<style scoped></style>

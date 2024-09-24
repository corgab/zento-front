<script>
// import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
// import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {

    }
  }
}

</script>

<template>

  <div id="app">
    <AppHeader></AppHeader>
    <RouterView />
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap';
// Icons
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
</style>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Sponsors from './components/Sponsors.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <Sponsors />
  <RouterView />
  <Footer />
  <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SearchBar from './components/SearchBar.vue'
import Destinations from './components/Destinations.vue'
import Tips from "@/components/Tips.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <h1>Welcome to the Travel Destination Guide</h1>
      <p>
        This is a simple travel destination guide that helps you find the best places to visit around the world. Try searching them now!
      </p>
      <SearchBar />
    </main>
    <Destinations />
    <Tips />
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  padding: 2rem;
  text-align: center;
}
h1 {
  font-size: 2.6rem;
  font-weight: 500;
}
p {
  font-size: 1.2rem;
  text-align: center;
}
</style>
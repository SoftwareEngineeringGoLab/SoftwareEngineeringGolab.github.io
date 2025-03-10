<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SearchBar from './components/SearchBar.vue';
import Destinations from './components/Destinations.vue';
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
  width: 100%; /* Ensures the container spans full width */
}

main {
  flex: 1;
  padding: 2rem;
  text-align: center;
  background-color: #f0f8ff; /* Light background for contrast */
  width: 100%; /* Makes sure main spans the full width */
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #0073e6; /* A vibrant blue for the title */
}

p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: #333; /* Slightly darker text for contrast */
}

.destinations,
.tips {
  width: 100%; /* Full width for these sections */
}
</style>

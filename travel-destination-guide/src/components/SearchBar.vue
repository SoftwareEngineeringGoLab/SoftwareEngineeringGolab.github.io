<template>
  <div class="search-bar">
    <input type="text" v-model="searchTerm" placeholder="Search destinations" />
    <button>Search</button>
  </div>
</template>

<script setup>
import { useDestinations } from '@/composables/useDestinations'

const { searchTerm } = useDestinations()
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 1rem;
  margin: 1rem;
  justify-content: center;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
}
</style>
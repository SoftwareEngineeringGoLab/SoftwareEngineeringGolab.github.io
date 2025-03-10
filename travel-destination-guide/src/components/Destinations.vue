<template>
  <section id="destinations">
    <h2>Destinations</h2>
    <div class="destination-list">
      <DestinationItem v-for="destination in destinations" :key="destination.id" :destination="destination" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DestinationItem from './DestinationItem.vue'



const destinations = ref([
  {
    id: 1,
    city: 'Paris',
    country: 'France',
    description: 'The city of light.',
    sights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral']
  },
  {
    id: 2,
    city: 'New York',
    country: 'USA',
    description: 'The city that never sleeps.',
    sights: ['Statue of Liberty', 'Central Park', 'Times Square']
  },
  // Add more destinations here
])
</script>

<style scoped>
.destination-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
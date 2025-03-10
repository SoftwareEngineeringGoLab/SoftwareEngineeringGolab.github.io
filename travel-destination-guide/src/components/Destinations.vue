<template>
  <section id="destinations">
    <h2>Destinations</h2>
    <div class="destination-list">
      <DestinationItem v-for="destination in filteredDestinations" :key="destination.id" :destination="destination" />
    </div>
  </section>
</template>

<script setup>
import { useDestinations } from '@/composables/useDestinations'
import DestinationItem from './DestinationItem.vue'

const { filteredDestinations } = useDestinations()
</script>

<style scoped>
.destination-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
<template>
  <div class="destination-item">
    <h3>{{ destination.city }}, {{ destination.country }}</h3>
    <p>{{ destination.description }}</p>
    <ul>
      <li v-for="sight in destination.sights" :key="sight">{{ sight }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  destination: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.destination-item {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: cornsilk;
  color: #333;
}

h3 {
  margin: 0 0 0.5rem 0;
}

ul {
  padding-left: 1.5rem;
}

ul li {
  list-style-type: disc;
}
</style>
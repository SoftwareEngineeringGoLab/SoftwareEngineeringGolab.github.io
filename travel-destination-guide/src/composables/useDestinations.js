import { ref, computed } from 'vue'

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

const searchTerm = ref('')

const filteredDestinations = computed(() => {
    return destinations.value.filter(destination =>
        destination.city.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        destination.country.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
})

export function useDestinations() {
    return {
        destinations,
        searchTerm,
        filteredDestinations
    }
}
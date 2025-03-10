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
    {
        id: 3,
        city: 'Tokyo',
        country: 'Japan',
        description: 'The city of neon lights.',
        sights: ['Tokyo Tower', 'Shibuya Crossing', 'Imperial Palace']
    },
    {
        id: 4,
        city: 'London',
        country: 'UK',
        description: 'The city of the River Thames.',
        sights: ['Big Ben', 'Tower Bridge', 'Buckingham Palace']
    },
    {
        id: 5,
        city: 'Sydney',
        country: 'Australia',
        description: 'The city of the Opera House.',
        sights: ['Sydney Opera House', 'Bondi Beach', 'Sydney Harbour Bridge']
    
    },
    {
        id: 6,
        city: 'Toronto',
        country: 'Canada',
        description: 'The city of the CN Tower.',
        sights: ['CN Tower', 'Ripley\'s Aquarium of Canada', 'Royal Ontario Museum']
    },
    {
        id: 7,
        city: 'Barcelona',
        country: 'Spain',
        description: 'The city of Gaudí.',
        sights: ['Sagrada Família', 'Park Güell', 'Casa Batlló']
    },
    {
        id: 8,
        city: 'Los Angeles',
        country: 'USA',
        description: 'The city of the Hollywood Sign.',
        sights: ['Hollywood Sign', 'Walk of Fame', 'Santa Monica Pier']
    },
    {
        id: 9,
        city: 'Sirjan',
        country: 'Iran',
        description: 'The city of the Pistachio.',
        sights: ['Bagh-e-sangi', "Erfan's Palace", 'Pistachio']
    },
    {
        id: 10,
        city: 'Saarbrucken',
        country: 'Germany',
        description: 'The city of the Saarland.',
        sights: ['Saarland Museum', 'Saarbrücken Castle', 'Ludwigskirche']
    }
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
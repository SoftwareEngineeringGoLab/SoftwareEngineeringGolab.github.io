<template>
  <div class="search-bar">
    <input type="text" placeholder="Search for a destination, for example, Tehran" />
    <button>Search</button>
  </div>
</template>

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

}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

.search-bar input {
  width: 100%;
}
</style>
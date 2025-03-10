<template>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#tips">Travel Tips</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ccc;
  }


  nav ul {
    display: flex;
    gap: 1rem;
  }

  nav ul li {
    list-style: none;
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
  }
</style>
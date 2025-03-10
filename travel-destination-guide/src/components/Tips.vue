<template>
  <section id="tips">
    <h2>Travel Tips</h2>
    <ul>
      <li>Bring a reusable water bottle.</li>
      <li>Wear comfortable shoes.</li>
      <li>Don't forget your passport!</li>
      <li>Always carry cash.</li>
    </ul>
  </section>
</template>

<style scoped>
#tips {
  background-color: #f0f8ff; /* Light blue background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  text-align: center;
  width: 100%; /* Make the section take full width */
}

h2 {
  font-size: 2.5rem;
  color: #0073e6; /* Vibrant blue */
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  text-align: justify;
}

ul {
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1.6;
}

ul li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

ul li span {
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: #0073e6; /* Icon color */
}
</style>
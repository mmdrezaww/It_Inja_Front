<template>
  <header class="header">
    <h1>Itinja</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #fdd835; /* Yellow */
  padding: 10px;
  text-align: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333; /* Dark gray */
}
</style>

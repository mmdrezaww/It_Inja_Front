<template>
  <div id="app">
    <Navbar/>
    <!-- Other components and content go here -->
<!--    <Home/>-->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,

  },
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  direction: rtl; /* Set global RTL direction */
  background-color: #fff;
}
</style>

<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Global styles can go here */
body {
  background-color: #f0f0f0; /* Light gray background */
  color: #333; /* Dark gray text */
}
</style>

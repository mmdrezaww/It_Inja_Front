<template>
  <div id="app">
    <Header/>
    <!-- Other components and content go here -->
    <!--    <Home/>-->
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,


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

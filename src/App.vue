<template>
  <div id="app">
    <Header/>
    <!-- Other components and content go here -->
    <!--    <Home/>-->
    <Menu/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
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

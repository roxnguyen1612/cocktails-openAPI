<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Ensures the #app container takes up the full width */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}

/* Additional global styles can be set here to ensure full width usage */
html, body {
  width: 100%; /* Ensures the html and body also have full width */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Crimson Text';
}
</style>

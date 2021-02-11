<template>
  <div id="app">
    <ExampleComponentGet/>
  </div>
</template>

<script>
import ExampleComponentGet from './components/ExampleComponentGet.vue'
export default {
  name: 'App',
  components: {
    ExampleComponentGet,
  
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

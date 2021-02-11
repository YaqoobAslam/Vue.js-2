<template>
<div id="app">
<weeks-component></weeks-component>
</div>
</template>

<script>
import weeks from './components/weeks.vue';

export default {

components: {
  'weeks-component': weeks
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

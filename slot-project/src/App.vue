<template>
  <div>
    <form-helper></form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  name: 'App',
  components: {
    'form-helper': formHelper
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

<template>
  <div>
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form One</button>
    <button v-on:click="component = 'form-two'">Show form Two</button>

  </div>
</template>

<script>

import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    'form-one':formOne,
    'form-two':formTwo

  },
  data(){
    return {
      component: 'form-one'
    }
  },
  methods:{

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

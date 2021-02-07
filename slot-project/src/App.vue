<template>
  <div>
    <form-one></form-one>
    <form-two></form-two>
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

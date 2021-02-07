<template>
  <div>
    <form-helper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the paragraph text from slot </p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  name: 'App',
  components: {
    'form-helper': formHelper
  },
  data(){
    return {
      title: 'I am a dynamic slot title'
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

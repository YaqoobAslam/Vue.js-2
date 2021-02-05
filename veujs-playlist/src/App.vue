<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>


<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content
  },

  data () {
    return {

    }
  }
}
</script>

<style></style>

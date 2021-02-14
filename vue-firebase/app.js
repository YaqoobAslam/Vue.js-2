new Vue({
  el: '#app',
  data: {
    title: 'Becoming Vue Developer',
    name: 'Yaqoob'
  },  
  methods: {

    updataName(e) {
      // console.log(e.target.value);
      this.name = e.target.value
    }
  }

}) 
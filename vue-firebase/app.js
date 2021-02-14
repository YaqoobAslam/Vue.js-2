new Vue({
  el: '#app',
  data: {
    title: 'Becoming Vue Developer',
    wage: 10 
  },
  methods: {
      changeWage(amount) {
        this.wage +=amount
      }
  }

}) 
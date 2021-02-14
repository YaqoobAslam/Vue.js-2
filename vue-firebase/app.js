new Vue({
  el: '#app',
  data: {
    title: 'Becoming Vue Developer',
    name: 'Yaqoob',
    url: 'https://www.youtube.com/'
  },
  methods: {
      greet(time){
          return `Hello and good ${time}... ${this.title}`
      }
  }

}) 
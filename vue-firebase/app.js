new Vue({
  el: '#app',
  data: {
    title: 'Becoming Vue Developer',
    name: 'Yaqoob',
    url: 'https://www.youtube.com/',
    classes: ['one','two']
  },
  methods: {
      greet(time){
          return `Hello and good ${time}... ${this.title}`
      }
  }

}) 
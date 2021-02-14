new Vue({
  el: '#app',
  data: {
    title: 'Becoming Vue Developer',
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    logEvent(e){
      console.log(e);
    },
    logCoords(e) {
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    }
  }

}) 
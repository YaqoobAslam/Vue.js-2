var one = new Vue({
    el:'#vue-app-one',
    data: {
      Title:'Vue App One'
    },
    methods: {

    },
    computed:{
      greet: function(){
        return 'Hello from app one :)';
      }
    }
});


var two = new Vue({
    el:'#vue-app-two',
    data: {
      Title:'Vue App Two'
    },
    methods: {
      changeTitle: function(){
        one.Title = 'Title Changed';
      }
    },
    computed:{
      greet: function(){
        return 'Yo dudes, this is app 2 speaking to ya:)';
      }
    }
});

two.Title = "Changed from outside";

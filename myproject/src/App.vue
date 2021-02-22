<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Navbar></Navbar>
    <AllFriends :friends="friends"  @delete="deleteFriends"  ></AllFriends>
    <OnlineFriends :friends="friends"   ></OnlineFriends>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
export default {
  name: 'app',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data () {
    return {
      title: 'My first Vue app, woo :)',
       friends: [
        {name: "Mario", online: true},
        {name: "Luigi", online: false},
        {name: "Toad", online: true},
        {name: "Bowser", online: false},
      ]
    }
  },
  methods: {
    deleteFriends(payload){
    // console.log(payload);
    this.friends = this.friends.filter(friend =>{
      return friend.name !== payload.name
    })

    }
  }
}
</script>

<style>
  h1 {
    color: #444;
    font-weight: normal;
    text-align: center;
  }
</style>

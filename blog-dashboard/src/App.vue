<template>
  <div id="app">
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>

  
  </div>
</template>

<script>
import Navbar from './components/Dashboard/Navbar'
import Footer from './components/Dashboard/Footer'
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>



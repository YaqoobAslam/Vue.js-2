<template>
  <div id="users">
    <!-- <Navbar></Navbar> -->
    <Header></Header>
    <Search></Search>
    <User></User>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Navbar from '../components/Dashboard/Navbar'
import Header from '../components/Users/Header'
import Search from '../components/Users/Search'
import User from '../components/Users/User'
// import Footer from '../components/Dashboard/Footer'


export default {
  name: "Usered",
  components: {
    // Navbar,
    Header,
    Search,
    User,
    // Footer
  }
}
</script>
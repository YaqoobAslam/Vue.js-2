<template>
  <div class="posts">
    <!-- <Navbar></Navbar> -->
    <Header></Header>
    <Search></Search>
    <!-- <AddPostModal></AddPostModal> -->
    <Posts></Posts>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Navbar from '../components/Dashboard/Navbar'
import Header from '../components/Posts/Header'
import Search from '../components/Posts/Search'
import Posts from '../components/Posts/Posts'
// import AddPostModal from '../components/Dashboard/AddPostModal'

// import Footer from '../components/Dashboard/Footer'

export default {
  name:"Posted",
  components: {
    // Navbar,
    Header,
    Search,
    Posts,
    // AddPostModal

    // Footer
  }
}
</script>




<template>
  <div id="categories">
    <!-- <Navbar></Navbar> -->
    <Header></Header>
    <Search></Search>
    <Categories></Categories>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Navbar from '../components/Dashboard/Navbar'
import Header from '../components/Categories/Header'
import Search from '../components/Categories/Search'
import Categories from '../components/Categories/Categories'
// import Footer from '../components/Dashboard/Footer'

export default {
  name: "Categoriesed",
  components: {
    // Navbar,
    Header,
    Search,
    Categories,
    // Footer

  }
}
</script>
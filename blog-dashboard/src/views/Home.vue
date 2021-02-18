<template>
  <div class="home">
     <!-- <Navbar></Navbar> -->
    <AppHeader></AppHeader>
    <Actions></Actions>
    <Posts></Posts>
    <AddPostModal></AddPostModal>
    <AddCategoryModal></AddCategoryModal>
    <AddUserModal></AddUserModal>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Navbar from '../components/Dashboard/Navbar'
import AppHeader from '../components/Dashboard/AppHeader'
import Actions from '../components/Dashboard/Actions'
import Posts from '../components/Dashboard/Posts'
import AddPostModal from '../components/Dashboard/AddPostModal'
import AddCategoryModal from '../components/Dashboard/AddCategoryModal'
import AddUserModal from '../components/Dashboard/AddUserModal'
// import Footer from '../components/Dashboard/Footer'

export default {
  name: 'Homes',
  components: {
    // Navbar,
    AppHeader,
    Actions,
    Posts,
    AddPostModal,
    AddCategoryModal,
    AddUserModal,
    // Footer

}
}
</script>

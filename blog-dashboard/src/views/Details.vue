<template>
  <div id="details">
    <Header></Header>
    <Actions></Actions>
    <Details></Details>
    <AddPostModal></AddPostModal>
    <AddCategoryModal></AddCategoryModal>
    <AddUserModal></AddUserModal>
  </div>
</template>

<script>
// import Navbar from '../components/Dashboard/Navbar'
import Header from '../components/Details/Header'
import Actions from '../components/Details/Actions'
import Details from '../components/Details/Details'
import AddPostModal from '../components/Details/AddPostModal'
import AddCategoryModal from '../components/Details/AddCategoryModal'
import AddUserModal from '../components/Details/AddUserModal'

// import Footer from '../components/Dashboard/Footer'
export default {
  name: "Detailed",
  components: {
    // Navbar,
    Header,
    Actions,
    Details,
    AddPostModal,
    AddCategoryModal,
    AddUserModal
    // Footer
    
  }
}
</script>
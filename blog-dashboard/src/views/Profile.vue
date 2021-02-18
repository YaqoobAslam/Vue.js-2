<template>
  <div>
    <Header></Header>
    <Actions></Actions>
    <Profile></Profile>
    <AddPostModal></AddPostModal>
    <AddCategoryModal></AddCategoryModal>
    <AddUserModal></AddUserModal>
    
  </div>
</template>

<script>
// import Navbar from '../components/Dashboard/Navbar'
import Header from '../components/Profile/Header'
import Actions from '../components/Profile/Actions'
import Profile from '../components/Profile/Profile'
import AddPostModal from '../components/Profile/AddPostModal'
import AddCategoryModal from '../components/Profile/AddCategoryModal'
import AddUserModal from '../components/Profile/AddUserModal'




// import Footer from '../components/Dashboard/Footer'
export default {
  name: "Profiled",
  components: {
    Header,
    Actions,
    Profile,
    AddPostModal,
    AddCategoryModal,
    AddUserModal

  }
}
</script>
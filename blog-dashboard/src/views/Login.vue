<template>
  <div>
    <Header></Header>
    <Actions></Actions>
    <Login></Login>
  </div>
</template>

<script>
import Header from '../components/Login/Header'
import Actions from '../components/Login/Actions'
import Login from '../components/Login/login.vue'
export default {
  name: "LigIn",
  components: {
    Header,
    Actions,
    Login
  }
}
</script>
<template>
  <div>
    <Header></Header>
    <Actions></Actions>
    <SettingPage></SettingPage>

  </div>
</template>

<script>
import Header from '../components/Settings/Header'
import Actions from '../components/Settings/Actions'
import SettingPage from '../components/Settings/SettingPage'
export default {
  name:"Setting",
  components: {
    Header,
    Actions,
    SettingPage
  }
}
</script>

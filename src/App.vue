<template>
  <div id="app">
    <router-view/>
    <tabbar-main></tabbar-main>
  </div>
</template>

<script>
import TabbarMain from "./components/content/mainTabbbar/TabbarMain"

export default {
  name: 'App',
  components: {
    TabbarMain,
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>

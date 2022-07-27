<template>
  <div id="app">
    <router-view/>
    <tabbar-main></tabbar-main>
  </div>
</template>

<script>
import TabbarMain from "./components/content/TabbarMain"

export default {
  name: 'App',
  components: {
    TabbarMain,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

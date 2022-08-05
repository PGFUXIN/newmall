<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped>
  .navBar{
    display: flex;
    background:var(--color-tint);
    box-shadow:var(--color-background) 5px 5px 30px 10px;
    position: fixed;
    width: 100%;
    z-index: 9;
  }
  .left,.right{
    width: 60px;
    height: 44px;
  }
  .center{
    flex: 1;
    height: 44px;
    padding: 13px 0px;
    color: white;
  }
</style>
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-bar",
  }
</script>

<style>
  @import "../../../assets/css/base.css";
  #tab-bar{
    display:flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0px -1px 1px #e6e6e6;
  }
  /*.tab-bar-item{*/
    /*flex: 1;*/
    /*text-align: center;*/
    /*height: 49px;*/
  /*}*/
  /*.tab-bar-item img{*/
    /*height: 24px;*/
    /*width: 24px;*/
    /*margin-top: 3px;*/
  /*}*/
</style>

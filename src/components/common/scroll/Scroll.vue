<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {bScroll} from '../../../common/betterScroll'
  export default {
    props:{

    },
    name: "scroll",

    methods:{
      fetchData(){
        console.log('fetchData');
      }
    },
    mounted(){
      bScroll(this.$refs.wrapper)

    }
  }
</script>

<style scoped>
.wrapper{
  height: 100vh;
  overflow: hidden;
}
</style>
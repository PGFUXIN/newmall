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

    },
    mounted(){


    }
  }
</script>

<style scoped>
.wrapper{
  height: 100%;
}
</style>
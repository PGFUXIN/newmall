<template>
  <div class="swapper" style="height:200px;background: red;overflow: hidden">
    <ul>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
      <li>{10000}</li>
    </ul>
  </div>
</template>

<script>
  import BetterScroll from '@better-scroll/core'
  import PullingUp from '@better-scroll/pull-up'
  BetterScroll.use(PullingUp);
  export default {
    name: "categroy",
    mounted(){
      const Bs = new BetterScroll('.swapper',{
        pullUpLoad:true,
        probeType:3,
        bounce: {
          top: true,
          bottom: true,
          left: true,
          right: true
        },

      })
      Bs.on('scroll',position=>{
        console.log(position.x);
        console.log(position.y);
      })
      Bs.on('pullingUp',()=>{
        console.log('上拉加载更多');
        Bs.finishPullUp()
      })
    }

  }
</script>

<style scoped>

</style>

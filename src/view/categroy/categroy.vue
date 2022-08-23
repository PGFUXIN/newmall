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
        scrollY: true,
        probeType:3,//0和1不侦测     2手指滚动时侦测，惯性滚动不侦测         3手指滚动和惯性都侦测
        click:true,//true不阻止内部点击事件     false阻止内部点击事件
        // pullUpLoad:true,
        pullUpLoad:{
          // 当上拉距离超过20px时触发 pullingUp 事件
          threshold: -30
        },
        mouseWheel: true,
        pullDownRefresh:{
          stop:0,
          threshold:40
        }
      })
      Bs.on('scroll',position=>{
        // console.log(position.x);
        // console.log(position.y);
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

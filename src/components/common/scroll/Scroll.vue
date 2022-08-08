<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // import {bScroll} from '../../../common/betterScroll'
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  BScroll.use(Pullup)

  export default {
    props:{

    },
    name: "scroll",
    data(){
      return {
        BS:{}
      }
    },
    methods:{
      fetchData(){
        console.log('fetchData');
      },
      scrollTo(x,y,time=500){
       this.BS.scrollTo(x,y,time)
      }
    },
    mounted(){
      // bScroll(this.$refs.wrapper)
      const bs = new BScroll(this.$refs.wrapper,{
        // pullUpLoad: true,//上拉加载更多
        // probeType:3,//0和1不侦测     2手指滚动时侦测，惯性滚动不侦测         3手指滚动和惯性都侦测
        // click:true,//true不阻止内部点击事件     false阻止内部点击事件
        // disableTouch: false
        scrollY: true,
        probeType:3,
        click:true,
        //pullUpLoad:true,
        pullUpLoad:{
          // 当上拉距离超过10px时触发 pullingUp 事件
          threshold: -10
        },
        mouseWheel: true,
        pullDownRefresh:{
          stop:0,
          threshold:40
        }
      })
      this.BS = bs
      // bs.on('scroll',positon=>{
      //   console.log(positon.y);
      // })
      bs.on("pullingUp",()=>{
        console.log("上拉加载更多");
        this.$parent.fetchData()//父组件获取数据的函数
        bs.finishPullUp()
        bs.refresh()//数据加载后需要重新refresh()一下scroll
      })
    }
  }
</script>

<style scoped>
.wrapper{
  height: 100vh;
  overflow: hidden;
}
</style>
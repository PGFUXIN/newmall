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
    name: "scroll",
    props:{
      probeType:{
        type:Number,
        default(){
          return 3
        }
      }
    },
    data(){
      return {
        BS:null
      }
    },
    methods:{
      scrollTo(x,y,time=500){
       this.BS.scrollTo(x,y,time)
      }
    },
    mounted(){
      // bScroll(this.$refs.wrapper)
      const bs = new BScroll(this.$refs.wrapper,{
        // disableMouse:true,
        disableTouch:false,
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
      this.BS = bs

      bs.on('scroll',position=>{
        // console.log(position);
        this.$emit("scroll",position)
      })
      bs.on("pullingUp",()=>{
        // 父组件获取数据的函数
        // this.$parent.fetchData().then(()=>{
        //   bs.finishPullUp();//下拉动作结束
        //   console.log('link===============================','link');
        //   bs.refresh()//数据加载后需要重新refresh()一下scroll
        // })
        console.log('pull up ...')
        this.$emit("pullingUp")
        bs.finishPullUp();
        bs.refresh()
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
<template>
  <div>
    <div style="width: 100%;overflow: hidden" class="wrapper" ref="wrapper">
      <div style="width: 300%;display: flex;margin-top: 44px"  class="content" >
        <img v-for="item in imgData" :src="item.image" style="flex: 1;width: 100px;"/>
      </div>
    </div>
    <div style="text-align: center;width: 100px;display: flex;margin: -35px auto;font-size: 30px">
      <div v-for="(item,index) in imgList" style="flex: 1;z-index: 10;" :class="{checked:index===currentIndex,unchecked:index!=currentIndex}" @click="checkImg(index)">-</div>

    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import {getHomeMultiData} from '../../../network/home'

  export default {
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    name: "swiper",
    data(){
      return {
        itemWidth:{width:'20%'},
        startX:0,
        imgList:[],
        currentIndex:0,
        imgData:[],
        timer:null,
        timerNum:0,//控制时钟只出现一次的参数
      }
    },
    methods:{
      getImgDataList(index){
        let data_1 = {}
        let data_2 = {}
        let data_3 = {}
        const imgList = this.imgList
        if(index==0){
          data_1 = imgList[imgList.length-1]
          data_2 = imgList[index]
          data_3 = imgList[index+1]
        }else if(index==imgList.length-1){
          data_1 = imgList[index-1]
          data_2 = imgList[index]
          data_3 = imgList[0]
        }else{
          data_1 = imgList[index-1]
          data_2 = imgList[index]
          data_3 = imgList[index+1]
        }
        this.imgData = [data_1,data_2,data_3]
      },
      checkImg(index){
        this.currentIndex=index;
        this.getImgDataList(this.currentIndex);
      },
      getImgList(){
        return getHomeMultiData()
      },
      //设置时钟定时轮播广告
      runInterval(){
        if(this.timerNum<=0){
          console.log("5555")
          console.log(this.timer)
          console.log("66666")
          this.timer = setInterval(() => {
            this.nextIndex()
            this.getImgDataList(this.currentIndex)
          }, 5000)
          this.timerNum = this.timerNum + 1
        }
      },
      clearInterval(){
        clearInterval(this.timer);
        this.timerNum = this.timerNum - 1
      },
      nextIndex(){
        console.log(new Date());
        if(this.currentIndex == this.imgList.length - 1) {
          this.currentIndex = 0;
        }else{
          this.currentIndex = this.currentIndex + 1;
        }
      }
    },
    created(){
      this.imgList = this.banner//将接收过来的banner用组件内部data数据接收方便理解
      this.runInterval()
    },
    mounted(){
      const startX = -document.body.clientWidth
      const bs = new BScroll(this.$refs.wrapper,{
        currentIndex:0,
        startX:startX,
        disableTouch:false,
        scrollX: true,
        probeType:3,//0和1不侦测     2手指滚动时侦测，惯性滚动不侦测         3手指滚动和惯性都侦测
        click:true,//true不阻止内部点击事件     false阻止内部点击事件
        mouseWheel: true,
        pullDownRefresh:{
          stop:0,
          threshold:40
        }
      })
      const scrollWidth = bs.wrapper.scrollWidth
      const offsetWidth = bs.wrapper.offsetWidth
      const len = this.imgList.length+2
      this.startX = startX

      bs.on('scroll',position=>{
        let positionX = position.x
        if(Math.abs(positionX-this.startX)>=offsetWidth/2){
          const moveX = this.startX-positionX
          if(positionX>this.startX){
            if(this.currentIndex ==0){
              this.currentIndex = this.imgList.length -1
            }else{
              this.currentIndex = this.currentIndex -1
            }

          }else if(positionX<this.startX){
            if(this.currentIndex ==this.imgList.length -1){
              this.currentIndex = 0
            }else{
              this.currentIndex = this.currentIndex +1
            }
          }
          this.getImgDataList(this.currentIndex);
          bs.scrollTo(this.startX,0,0)
          bs.refresh()
        }
      })
      bs.on('scrollStart',position=>{
        //启动轮播时钟
        console.log('touchStart');
        console.log("33333");
        console.log(this.timer);
        console.log("44444");
        this.clearInterval()//清除轮播时钟
      }),
      bs.on('touchEnd',position=>{
        //启动轮播时钟
        console.log('touchEnd')
        this.runInterval()
      }),
      bs.on('scrollEnd',position=>{
        console.log('scrollEnd')
        bs.scrollTo(this.startX,0,500)
        console.log("1111");
        console.log(this.timer);
        console.log("2222");
      })
    }
  }
</script>

<style scoped>
/*.content{*/
  /*transform:translateX(100%) translateY(0px) translateZ(1px)*/
/*}*/
  .checked{
    color: var(--color-high-text);
  }
  .unchecked{
    color:white;
  }
</style>
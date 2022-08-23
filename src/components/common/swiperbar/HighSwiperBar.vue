<template>
  <div style="width: 100%;overflow: hidden;" class="wrapper" ref="wrapper">
    <div style="width: 500%"  class="content" >
      <img :style="itemWidth" :src="imgList[imgList.length-1].imgUrl"/>
      <img v-for="item in imgList" :style="itemWidth" :src="item.imgUrl"/>
      <img :style="itemWidth" :src="imgList[0].imgUrl"/>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'

  export default {
    name: "high-swiper-bar",
    data(){
      return {
        contentWidthStyle:{width:'500%'},
        itemWidth:{width:'20%'},
        startX:0,
        transformStyle: {transform:'translateX(-856px) translateY(0px) translateZ(1px)'},
        imgList:[{imgUrl:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"},
                  {imgUrl:"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",},
                  {imgUrl:"https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"}
        ]
      }
    },
    computed:{

    },
    methods:{
      getContentWidth(){
        return ((this.imgList.length+2)*100)+"%"
      },
      getItemWidth(){
        return 1/(this.imgList.length+2)*100+"%"
      }
    },
    created(){
      this.contentWidthStyle = "width:"+this.getContentWidth()
      this.itemWidth = "width:"+this.getItemWidth()
    },
    mounted(){
      const startX = -document.body.clientWidth
      console.log(startX);
      const bs = new BScroll(this.$refs.wrapper,{
        startX:startX,
        disableTouch:false,
        scrollX: true,
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
      const scrollWidth = bs.wrapper.scrollWidth
      const offsetWidth = bs.wrapper.offsetWidth
      const len = this.imgList.length+2
      this.startX = startX

      bs.on('scroll',position=>{
        let positionX = position.x

        if(Math.abs(positionX-this.startX)>=offsetWidth/2){
          if(positionX-this.startX>0){
            console.log(positionX);
            if(positionX>-offsetWidth){
              const toPositionX = offsetWidth-scrollWidth
              console.log(toPositionX);
              bs.scrollTo(toPositionX,0,1000)
              this.startX = toPositionX
            }
          }else if(positionX-this.startX<0){
            console.log(positionX);
            console.log("this.startX====="+this.startX);
            if(positionX<offsetWidth-scrollWidth){
              const toPositionX = startX
              bs.scrollTo(toPositionX,0,1000)
              this.startX = toPositionX
            }
          }
        }
      })
    }
  }
</script>

<style scoped>
/*.content{*/
  /*transform:translateX(100%) translateY(0px) translateZ(1px)*/
/*}*/
</style>
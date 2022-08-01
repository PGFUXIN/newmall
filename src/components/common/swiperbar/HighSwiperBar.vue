<template>
  <div style="width: 100%;overflow: auto;">
    <div style="width: 300%;" @pointerdown.prevent="bannerListMouseDown" ref="bannerList" class="bannerList">
      <img style="width: calc(1/3*100%)" src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"/>
      <img style="width: calc(1/3*100%)" src="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg"/>
      <img style="width: calc(1/3*100%)" src="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"/>
    </div>
    <!--<div class="bannerItem">-->
      <!--<img src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg">-->
    <!--</div>-->
    <!--<div>-->
      <!--<img src="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg">-->
    <!--</div>-->
    <!--<div>-->
      <!--<img src="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg">-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "high-swiper-bar",
    data(){
      return {
        mousePosition_down:0,
        count:0,
        moveFlag:false,
        bannerListWidth:'',
        listLength:1,
        startPosition:0,
        endPosition:0,
        lastMove:0,
        moveX:0
      }
    },
    methods:{
      mouseUp(e){
        console.log("mouseUp");
        setTimeout(() => {
          this.moveFlag = false
        }, 0);
        this.removeListener()
        this.endPosition = e.changedTouches[0].pageX
      },
      mouseStart(e){
        this.startPosition = e.changedTouches[0].pageX
      },
      mouseMove(e){
        this.endPosition = e.changedTouches[0].pageX
      },
      mouseEnd(e){
        this.removeListener();
        this.endPosition = e.changedTouches[0].pageX
        this.moveX = Math.abs(this.endPosition-this.startPosition);

        const clientWidth = document.body.clientWidth
        const screenWidth = window.screen.width
        console.log('moveX=======',this.moveX)
        console.log('clientWidth=======',clientWidth)
        console.log('screenWidth=======',screenWidth)
        if(this.moveX>=screenWidth/2){
          this.lastMove = screenWidth-this.moveX
          console.log("lastMove1===",this.lastMove);
          this.$refs.bannerList.style.transform = `translateX(418px)`
        }else if(this.moveX<=-screenWidth/2){
          this.lastMove = this.moveX-screenWidth
          console.log("lastMove2===",this.lastMove);

          this.$refs.bannerList.style.transform = `translateX($0px)`
        }else if(this.moveX<screenWidth/2&this.moveX>=0){

          this.$refs.bannerList.style.transform = `translateX(150px)`
        }else{
          console.log("moveX2====",this.moveX);
          this.$refs.bannerList.style.transform = `translateX(50px)`
        }
      },

      // mouseEnd(e){
      //   this.removeListener();
      //   this.endPosition = e.changedTouches[0].pageX
      //   this.moveX = this.endPosition-this.startPosition;
      //   const clientWidth = document.body.clientWidth
      //   const screenWidth = window.screen.width
      //   console.log('moveX=======',this.moveX)
      //   console.log('clientWidth=======',clientWidth)
      //   console.log('screenWidth=======',screenWidth)
      //   if(this.moveX>=screenWidth/2){
      //     this.lastMove = screenWidth-this.moveX
      //     console.log("lastMove1===",this.lastMove);
      //     this.$refs.bannerList.scrollLeft = this.lastMove
      //     this.$refs.bannerList.scroll()
      //   }else if(this.moveX<=-screenWidth/2){
      //     this.lastMove = this.moveX-screenWidth
      //     console.log("lastMove2===",this.lastMove);
      //     this.$refs.bannerList.scrollLeft = this.lastMove
      //     this.$refs.bannerList.scroll()
      //   }else if(this.moveX<screenWidth/2&this.moveX>=0){
      //     console.log("moveX1====",this.moveX);
      //     this.$refs.bannerList.scrollLeft = this.moveX
      //     this.$refs.bannerList.scroll()
      //   }else{
      //     console.log("moveX2====",this.moveX);
      //     this.moveX = 0 - this.moveX;
      //     this.$refs.bannerList.scrollLeft = this.moveX
      //     this.$refs.bannerList.scroll()
      //   }
      // },

      bannerListMouseDown(e){
        this.$refs.bannerList.addEventListener("touchstart",this.mouseStart)
        this.$refs.bannerList.addEventListener("touchmove",this.mouseMove)
        this.$refs.bannerList.addEventListener("touchend",this.mouseEnd)
      },
      removeListener(){
        this.$refs.bannerList.removeEventListener("touchstart", this.mouseStart);
        this.$refs.bannerList.removeEventListener("touchmove", this.mouseMove);
        this.$refs.bannerList.removeEventListener("touchend", this.mouseEnd);
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
.bannerList{
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
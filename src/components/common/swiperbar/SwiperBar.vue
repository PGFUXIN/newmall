<template>
  <div style="padding-top:44px">
    <!--{{banner}}-->
      <div class="swiperBar" v-if="banner !==null">
          <img :src="banner[currentIndex].image" >
      </div>
      <div class="selects">
        <span v-for="(item,index) in banner" @click="selectBanner(index)" :class="isActive(index)">-</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "SwiperBar",
    props:{
      banner:{
        type:Array
      }
    },
    computed:{
      nextIndex() {
        if(this.currentIndex == this.banner.length - 1) {
          return 0;
        }else{
          return this.currentIndex + 1;
        }
      }
    },
    data(){
      return {
        currentIndex:0,
        active:"selected"
      }
    },
    methods:{
      selectBanner(currentIndex){
        this.currentIndex = currentIndex;
      },
      runInv() {
        this.timer = setInterval(() => {
          this.selectBanner(this.nextIndex)
        }, 5000)
      },
      isActive(index){
        if(this.currentIndex==index){
          return this.active
        }
      }
    },
    mounted(){

    },
    created(){
      this.runInv()
    },
    beforeDestroy(){
      clearInterval(this.timer);
    }
  }
</script>

<style scoped>
  .swiperBar img{
    width: 100%
  }
  img::-webkit-scrollbar{
    width: 0;
  }
  span{
    display: inline-block;
    /* align-items: center; */
    font-size: 30px;
    width: 15px;
    color:white;
  }
  .selects{
    text-align: center;
    margin-top: -40px;
  }
  .selected{
    color:palevioletred;
  }
</style>
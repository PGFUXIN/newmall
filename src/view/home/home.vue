<template>
  <div>
    <nav-bar>
      <P slot="center" style="text-align: center">购物街</P>
    </nav-bar>
    <swiper-bar :banner="banner"></swiper-bar>
    <recommend :recommends="recommend"></recommend>
    <!--<high-swiper-bar></high-swiper-bar>-->
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar"
  import {getMultiData} from 'network/home.js'
  import SwiperBar from "../../components/common/swiperbar/SwiperBar"
  import Recommend from "./childcomp/recommend"
  // import HighSwiperBar from "../../components/common/swiperbar/HighSwiperBar"
  export default {
    name: "home",
    components:{
      Recommend,
      // HighSwiperBar,
      NavBar,
      SwiperBar
    },
    data(){
      return {
        banner:null,
        recommend:null
      }
    },
    created(){
      getMultiData().then(result=>{
        this.banner = result.data.banner.list;
        console.log(this.banner);
        this.recommend = result.data.recommend.list;

      }).catch(err=>{
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>

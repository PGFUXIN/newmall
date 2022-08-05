<template>
  <div>
    <nav-bar>
      <P slot="center" style="text-align: center">购物街</P>
    </nav-bar>
    <scroll>
      <swiper-bar :banner="banner"></swiper-bar>
      <recommend :recommends="recommend"></recommend>
      <feature-view></feature-view>
      <tab-control class="home-tab-control" :titles="tabControlTitles" @tabClick="tabClick"></tab-control>
      <goods-view :goods="goods[goodsType]"></goods-view>
    </scroll>
    <back-top @backTop.native="backTop"></back-top>
    <!--<high-swiper-bar></high-swiper-bar>-->
  </div>


</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar"
  import SwiperBar from "../../components/common/swiperbar/SwiperBar"
  import Recommend from "./childcomp/recommend"
  import FeatureView from "./childcomp/feature-view"
  import TabControl from "../../components/content/controlTab/TabControl"
  import GoodsView from "../../components/content/goods/GoodsView"
  import Scroll from "../../components/common/scroll/Scroll"
  import BackTop from "../../components/content/backTop/BackTop"


  import {
    getHomeMultiData,
    getHomeGoods
  } from '../../network/home.js'


  // import HighSwiperBar from "../../components/common/swiperbar/HighSwiperBar"
  export default {
    name: "home",
    components:{
      Scroll,
      TabControl,
      FeatureView,
      Recommend,
      // HighSwiperBar,
      NavBar,
      SwiperBar,
      FeatureView,
      TabControl,
      GoodsView,
      BackTop
    },
    data(){
      return {
        banner:null,
        recommend:null,
        tabControlTitles:['流行','新款','精选'],
        goodsType:"pop",
        goods:{
          pop:{pageNum:0,list:[],type:'pop'},
          new:{pageNum:0,list:[],type:'new'},
          sell:{pageNum:0,list:[],type:'sell'}
        }
      }
    },
    created(){
      //获取轮播图数据
      this.getHomeMultiData()
      //获取商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){

    },
    methods:{
      /**
       * 事件相关
       * */
      tabClick(index){
        if(index==0){
          this.goodsType='pop'
        }else if(index==1){
          this.goodsType='new'
        }else if(index==2){
          this.goodsType='sell'
        }else{
          throw "系统开小差了!!!"
        }
      },
      backTop(){
        // this.Scroll.
      },

      /**
       * 网络接口相关
       * */
      getHomeMultiData(){
        getHomeMultiData().then(result=>{
          this.banner = result.data.banner.list;
          this.recommend = result.data.recommend.list;
        }).catch(err=>{
          console.log(err);
        })
      },

      fetchData(){
        const type = this.goodsType
        this.getHomeGoods(type)
      },

      getHomeGoods(type){
        let page = this.goods[type].pageNum + 1
        getHomeGoods({
          type,
          page
        }).then(
          res=>{
            console.log("res================",res.data.list);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].pageNum = pageNum
          }
        ).catch(
          err=>{

          })
      }
    }
  }
</script>

<style scoped>
  .home-tab-control{
    position: sticky;
    top:44px;
    background: white;
  }
</style>

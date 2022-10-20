<template>
  <div>
    <nav-bar ref="navBar">
      <P slot="center" style="text-align: center">购物街</P>
    </nav-bar>
    <tab-control style="position: fixed;top: 44px;" :titles="tabControlTitles" @tabClick="tabClick" ref="tabControlX" v-show="showTabControl"></tab-control>
    <scroll ref="scroll" :probe-type="probeType" @scroll="scrollContent" @pullingUp="fetchData">
      <!--增加v-if = banner以保证接口数据加载完成再渲染页面-->
      <swiper v-if="banner" :banner="banner"></swiper>
      <recommend :recommends="recommend"></recommend>
      <feature-view></feature-view>
      <tab-control :titles="tabControlTitles" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-view :goods="goods[goodsType]" ref="goodsView"></goods-view>
    </scroll>
    <back-top @click.native="backTop" v-show="showBacktop"></back-top>
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
  import HighSwiperBar from "../../components/common/swiperbar/HighSwiperBar"
  import Swiper from "../../components/common/swiperbar/Swiper"

  import {
    getHomeMultiData,
    getHomeGoods
  } from '../../network/home.js'

  export default {
    name: "home",
    components:{
      Scroll,
      TabControl,
      FeatureView,
      Recommend,
      HighSwiperBar,
      NavBar,
      SwiperBar,
      FeatureView,
      GoodsView,
      BackTop,
      Swiper
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
        },
        probeType:3,
        showBacktop:false,
        showTabControl:false,
        timer:null,
        homeX:0
      }
    },
    created(){
      // 获取轮播图数据
      this.getHomeMultiData()
      //获取商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      //监听图片加载完成后重新刷新scroll的高度
      this.$bus.$on("loadOver",()=>{
        this.debounce(this.refresh,200)
      })

    },

    mounted(){

    },

    updated(){

    },
    //路由回来时回到原点
    activated(){
      this.$refs.scroll.scrollTo(0,this.homeX,0)
    },
    destroy(){

    },
    //路由离开时记住当前页面的位置
    deactivated(){
      this.homeX = this.$refs.scroll.BS.y
    },
    methods:{
      refresh(){
        // console.log("this.$refs.scroll.BS=",this.$refs.scroll.BS.refresh);
        if(this.$refs.scroll){
          console.log('xxxxx');
          this.$refs.scroll.refresh()
        }else{
          console.log('refresh');
          this.refresh()
        }
        // this.$refs.scroll&&this.$refs.scroll.refresh()
      },
      /**防抖函数*/
       debounce(func,delay){
        if(this.timer){
          clearTimeout(this.timer)
        }{
          this.timer = setTimeout(()=>{
            func.apply()
          },delay)
        }
      },
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
        //设置两个tabControl的选中项一致
        if(this.$refs.tabControlX){
          this.$refs.tabControlX.currentIndex = index;
        }
        if(this.$refs.tabControl){
          this.$refs.tabControl.currentIndex = index;
        }
      },
      backTop(){
        // this.Scroll
        this.$refs.scroll.scrollTo(0,0,1000)
      },
      scrollContent(position){
        //控制backtop显示隐藏
        this.showBacktop =  Math.abs(position.y)>1000
        //控制tabControl吸顶
        let move = this.$refs.tabControl.$el.offsetTop-44

        this.showTabControl = Math.abs(position.y) > move
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
        return this.getHomeGoods(type)
      },

      getHomeGoods(type){
        let page = this.goods[type].pageNum + 1
        return getHomeGoods({
          type,
          page
        }).then(
          res=>{
            // console.log("res================",res.data.list);
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

</style>

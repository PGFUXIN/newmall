<template>
  <div class="goods-view">
    <div style="display: contents;">
      <goods-item v-for="(item,index) in goods.list" :goodsItem="item" :key="goods.type+index"></goods-item>
    </div>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem"
  export default {
    components: {GoodsItem},
    name: "GoodsView",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        pop:'pop'
      }
    },
    // mounted(){
    //   console.log("this.parent=======================",this.$parent.$parent.$refs.scroll.BS.refresh());
    // },
    methods:{
      getKey(index){
        const key = this.goods.type+index;
        return this.goods.type+index
      }
    }
  }
</script>

<style scoped>
  .goods-view{
    /*column-count:2;*/
    position:relative;
    display: flex;
    flex-wrap: wrap;
    padding: 44px 5px 5px 5px;
    bottom: 90px;
    margin-top: 40px;
  }
</style>
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
    methods:{
      getKey(index){
        console.log("this.goods.type================",this.goods.type);
        const key = this.goods.type+index;
        console.log("key=======",key);
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
    padding: 5px;
    bottom: 49px;
  }
</style>
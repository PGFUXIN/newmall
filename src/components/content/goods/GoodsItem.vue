<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" @load="imgLoadOver">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="good-item-fav"></span>
    <span class="goods-item-fav">{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return null
        }
      }
    },
    methods:{
      imgLoadOver(){
        // console.log('isOver');
        this.$bus.$emit('loadOver')
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    text-align: center;
    position: relative;
    padding: 5px;
    width:50%;
    height: fit-content;
  }
  .goods-item img{
    width:100%
  }
  .goods-item p{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;/*限制几行显示*/
  }

  .goods-item-fav::before {
    content: '';
    position: absolute;
    bottom: 5px;
    margin-left:-15px ;
    width: 15px;
    height: 15px;
    background: url(../../../assets/img/goods/fav.png);
    background-size:100% 100%;
  }
  .price{
    color: var(--color-high-text);
  }
  .goods-item-fav{
    margin-left: 17px;
  }
</style>
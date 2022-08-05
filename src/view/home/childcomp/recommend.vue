<template>
  <div class="recommend">
    <div  v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    name: "recommend"
  }
</script>

<style scoped>
  .recommend{
    display:flex;
    margin-top: 10px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid var(--color-tint);
    font-size: 14px;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 68px;
    width: 68px;
  }
</style>
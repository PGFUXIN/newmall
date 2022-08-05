<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item">
      <span :class="{active:(currentIndex===index)}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-control",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex :0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit("tabClick",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    position: relative;
    z-index: 9;
  }
  .tab-control-item{
    flex:1;

  }
  .active{
    border-bottom: 3px solid var(--color-high-text);
    padding:5px;
  }
</style>
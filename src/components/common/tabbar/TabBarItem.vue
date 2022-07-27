<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="isActived">
      <slot name="item-icon"></slot>
      <div :style="isActivedColor">
        <slot name="item-text"></slot>
      </div>
    </div>
    <div v-show="!isActived">
      <slot name="item-icon-active"></slot>
      <div>
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "tab-bar-item",
    props:{
      path:{
        type:String
      },
      activeColor:{
        type:String
      }
    },
    computed:{
      isActived(){
        // console.log('this.$route.path=',this.$route.path);
        // console.log('this.path=',this.path);
        // console.log(this.$route.path.indexOf(this.path));
        return this.$route.path.indexOf(this.path)!==-1
      },
      isActivedColor(){
        if(this.$route.path.indexOf(this.path)!==-1){
          // console.log("this.activeColor!==null&&this.activeColor!==''",this.activeColor!==null&&this.activeColor!=='')
          // console.log({color:(this.activeColor!==null&&this.activeColor!=='')?this.activeColor:this.defaultActiveColor})
          return {color:(this.activeColor!==null&&this.activeColor!==''&&this.activeColor!==undefined)?this.activeColor:this.defaultActiveColor}
        }
      }
    },
    data(){
      return{
        isActive:true,
        defaultActiveColor:'red'
      }
    },
    methods:{
      itemClick(){
        if(this.$router.currentRoute.path.substr(1)==this.path){
          return
        }
        this.$router.push(this.path)
      },
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
  }
</style>

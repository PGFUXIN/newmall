<template>
  <div>
    <div class="main" ref="main">
      <div class="headtop">

      </div>
      <div class="headdiv">

      </div>
      <div class="showdiv">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopcart",
    mounted(){
      document.addEventListener('DOMMouseScroll', this.scrollT,false);
    },
    methods:{
      scrollT(){
        const scrollT= document.body.scrollTop;
        const headdiv= document.querySelector(".headdiv");
        if(document.documentElement.scrollTop >= 50){
          console.log('2');
          headdiv.style.position="fixed";
          headdiv.style.top="0px";
          headdiv.style.zIndex="2";
        }else{
          console.log('1');
          headdiv.style.position="relative";
        }
      },
    }
  }
</script>

<style scoped>
  .showdiv{
    width:100%;
    height: 1200px;
    background-color: #666666;
    margin:0px auto;
  }
  .headdiv{
    width: 100%;
    height: 50px;
    /*position: sticky;*/
    /*top: 0px;*/
    background-color: #2aabd2;
  }
  .main{
    position: relative;
  }
  .headtop{
    height: 50px;
  }
</style>

<template>
  <a-row class="project-case">
    <a-col :span="24" class="title">
      <router-link to="/customerCase" tag="span">经典案例</router-link>
    </a-col>
    <div class="content">
      <div
              class="content-list"
              ref="contentList"
              @mousedown.prevent="contentListMouseDown"
      >
        <a-col
                class="content-item"
                :span="4"
                v-for="(item, index) in dataList"
                :key="index"
        >
          <!-- <router-link :to="item.path"> -->
          <img @mousedown.prevent="" @click="routerLink(item)" :src="item.url" alt="" />
          <!-- </router-link> -->
        </a-col>
      </div>
    </div>
  </a-row>
</template>
<script>
  export default {
    name: "BottomScrollImg",
    data() {
      return {
        dataList: [],
        timerId: "",
        count: 0,
        stopFlag: false,
        mousePosition_down: "",//鼠标点击时的位置
        contentListWidth:'',//list的宽度
        listLength:2,//要显示的图片占据的list
        moveFlag:false,//鼠标拖动时，阻止路由跳转
        // mousePosition_up: "",
      };
    },
    methods: {
      routerLink(item){
        if(this.moveFlag) return
        this.$router.push(item.path)
      },
      // 鼠标按下时，添加move 和up事件
      contentListMouseDown(e) {
        // console.log("down", e.offsetX);
        this.mousePosition_down = e.offsetX;
        this.$refs.contentList.addEventListener("mousemove", this.mouseMove);
        this.$refs.contentList.addEventListener("mouseup", this.mouseUp);
      },
      // 鼠标up时，移除move和up事件
      mouseUp() {
        setTimeout(() => {
          this.moveFlag = false
        }, 0);
        // console.log("up", e.offsetX);
        this.removeListener()
        // 拖动到列表最前面时
        if(this.count < this.contentListWidth){
          console.log('小')
          this.count = parseInt(this.count) + this.contentListWidth * this.listLength
          this.$refs.contentList.style.transform = `translateX(-${this.count}px)`;
        }
        // 拖动到列表最后面时
        if(this.count > this.contentListWidth * (this.listLength + 1)){
          console.log(this.count / this.contentListWidth)
          console.log('最大')
          this.count = parseInt(this.count) - this.listLength * this.contentListWidth
          this.$refs.contentList.style.transform = `translateX(-${this.count}px)`;
        }
      },
      // 鼠标move时，list跟随移动
      mouseMove(e) {
        this.moveFlag = true
        // console.log("move", e.offsetX);
        let mousePosition_move = e.offsetX;
        this.count = parseInt(this.mousePosition_down) - mousePosition_move + parseInt(this.count);
        // console.log(this.count);
        this.$refs.contentList.style.transform = `translateX(-${this.count}px)`;
      },
      // 移除contentlist的mousemove 和 mouseup；在鼠标up、鼠标移出此元素、时。
      removeListener(){
        this.$refs.contentList.removeEventListener("mousemove", this.mouseMove);
        this.$refs.contentList.removeEventListener("mouseup", this.mouseUp);
      }
    },
    mounted() {
      // 定时器滚动
      this.$refs.contentList.addEventListener("mouseenter", () => {
        this.stopFlag = true;
      });
      this.$refs.contentList.addEventListener("mouseleave", () => {
        this.stopFlag = false;
        // 在mouseleave时也移除move和up事件
        this.mouseUp()
      });
      this.contentListWidth = parseInt(getComputedStyle(this.$refs.contentList).width);
      this.count = parseInt(getComputedStyle(this.$refs.contentList).width);
      // console.log(this.count);
      this.timerId = setInterval(() => {
        if (this.stopFlag) return;
        this.count++;
        if (
            this.count == this.contentListWidth * this.listLength
        ) {
          this.count = this.contentListWidth
        }
        this.$refs.contentList.style.transform = `translateX(-${this.count}px)`;
      }, 15);
    },
    beforeDestroy(){
      clearInterval(this.timerId)
    }
  };
</script>
<style lang="less" scoped>
  .project-case {
    padding-bottom: 3rem;
    overflow: hidden;
    .title {
      font-size: 3.6rem;
      padding: 5rem 0;
      span {
        cursor: pointer;
      }
    }
    .content {
      .content-list {
        user-select: none;
        transform: translateX(-33.33%);
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        .content-item {
          padding-right: 5rem;
          img {
            transition: all 0.5s;
            width: 100%;
            cursor: pointer;
            &:hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
    .content{
      height: 195px;
    }
  }
</style>
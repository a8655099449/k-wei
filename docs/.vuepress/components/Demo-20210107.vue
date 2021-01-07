<!--
 * @Author: your name
 * @Date: 2021-01-07 09:01:03
 * @LastEditTime: 2021-01-07 09:12:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\components\Demo-20210107.vue
-->
<template>
  <div>
    <p>滚动位置  <button @click="setScroll(100)">设置滚动条位置到100</button> <span>滚动条位置 ： {{scrollTop}} </span> </p>
    <div class="scroll-box" ref="warp"> 
      <div class="item" v-for="item in 20"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: "",
      scrollTop:0
    };
  },
  methods:{
    setScroll(num){
      this.$refs.warp.scrollTop = num
      console.log(num);
    },
    changeScroll(){
      this.scrollTop = this.$refs.warp.scrollTop

    }
  },
  mounted(){
    this.$refs.warp.addEventListener('scroll',this.changeScroll)
    

  }
};
</script>

<style scoped>
p {
  margin: 10px;
}
.scroll-box {
  overflow-y: scroll;
  height: 100px;

  border: 1px solid #eee;
}
.item {
  height: 30px;
  background: #ccc;
}
.item:nth-child(2n) {
  background-color: #333;
}
</style>
<!--
 * @Date: 2020-12-14 05:53:05
 * @LastEditors: kuangw
 * @LastEditTime: 2020-12-14 06:04:52
 * @FilePath: \my-node\docs\.vuepress\components\Demo-20201214.vue
 * @desc: Do not edit
-->
<template>
  <div class="yzm">
    <button @click="changeCode">生成验证码</button>
    <p>验证码是 {{code}} </p>
    <canvas height="50" width="200" ref="canvas" id="canvas" @click="changeCode"></canvas>
  </div>
</template>

<script>
import YZM from './public/yzm';
export default {
  data() {
    return {
      code:''
    }
  },
  mounted(){
    this.codeObj = new YZM('#canvas')
    this.code = this.codeObj.createCode()
  },
  methods:{
    changeCode(){
      this.code = this.codeObj.createCode()
    }

  }
  
}
</script>

<style scoped>
.yzm{
  padding: 20px 0;

}
</style>
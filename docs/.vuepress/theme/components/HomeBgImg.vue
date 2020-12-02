<!--
 * @Author: your name
 * @Date: 2020-12-02 10:08:11
 * @LastEditTime: 2020-12-02 11:09:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\theme\components\HomeBgImg.vue
-->

<template>
  <div class="home-bg-img">
    <img :src="getImgSrc" alt="" />
  </div>
</template>

<script>
import bzArr from "../helpers/bz";
export default {
  computed: {
    getImgSrc() {
      return bzArr[parseInt(Math.random() * bzArr.length)];
    },
  },
};
</script>

<style>
.home-bg-img {
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  /* background: red; */
  position: absolute;
}
.home-bg-img img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 1400px) {
  .home-bg-img img {
    width: auto;
    height: 100vh;
  }
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-11-30 17:34:22
 * @LastEditTime: 2020-11-30 17:55:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\theme\components\PageBgImg.vue
-->
<template>
  <div class="page-bg-img">
    <!-- 我是背景图片 -->
    <img src="http://image.woai996.com/picGo/anime.jpg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.page-bg-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  top: 0;
  bottom: 0;
  background: #ccc;
  z-index: -1;
  width: 100vw;
  overflow: hidden;
}

.page-bg-img  img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform translate(-50%,-50%)
}
</style>
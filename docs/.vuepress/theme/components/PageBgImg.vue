<!--
 * @Author: your name
 * @Date: 2020-11-30 17:34:22
 * @LastEditTime: 2020-12-02 11:01:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\theme\components\PageBgImg.vue
-->
<template>
  <div class="page-bg-img" ref="bgImgWarp">
    <!-- 我是背景图片 -->
    <img :src="getImgSrc" @load="handleImgLoad" ref="bgImg" />
  </div>
</template>

<script>
import brArr from "../helpers/bz";
export default {
  computed: {
    getImgSrc() {
      return brArr[parseInt(Math.random() * brArr.length)];
    },
  },
  methods: {
    handleImgLoad() {
      // console.log('图片加载好了');
      let imgHeight = this.$refs["bgImg"].clientHeight;
      let warpHeight = this.$refs["bgImgWarp"].clientHeight;
      // console.log(imgHeight-warpHeight);
      document
        .querySelector(":root")
        .style.setProperty(
          "--page-bg-imgTop",
          -(imgHeight - warpHeight) + "px"
        );
    },
  },
};
</script>

<style >
.page-bg-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--background-color);
  z-index: -1;
  width: 100vw;
  overflow: hidden;
}

.page-bg-img img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* top: 50%; */
  width: 100%;
  /* transform: translate(-50%, -50%); */
  top: 0;

  animation: imgMove 30s linear infinite;
}

@keyframes imgMove {
  0% {
    top: 0;
    bottom: auto;
  }
  10% {
    bottom: 0;
    top: calc(var(--page-bg-imgTop) / 2);
    /* top: var(--page-bg-imgTop); */
  }
  40% {
    bottom: 0;
    top: calc(var(--page-bg-imgTop) / 2);
    /* top: var(--page-bg-imgTop); */
  }
  50% {
    bottom: 0;
    /* top: calc(var(--page-bg-imgTop) / 2); */
    top: var(--page-bg-imgTop);
  }
  60% {
    bottom: 0;
    top: calc(var(--page-bg-imgTop) / 2);
  }
  90% {
    bottom: 0;
    top: calc(var(--page-bg-imgTop) / 2);
    /* top: var(--page-bg-imgTop); */
  }
  100% {
    top: 0;
    bottom: auto;
  }
}

@media (max-width: 740px) {
  .page-bg-img img {
    /* width: auto;
    height: 100%; */
    animation: none;
  }
}
</style>
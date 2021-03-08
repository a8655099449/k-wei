---
title: bilibili-banner特效2
date: 2021-01-19
tags:
 - 前端
categories: code
pic: '//photo.tuituisoft.com/picgo/20210119101910.png'
---

## 实现的效果


<ClientOnly>
  <Demo-20210118-2 />
</ClientOnly>

## 实现代码
> 我是使用vue写的 只要做一点小改动就可以在普通的html实现
:::details 展开代码
```vue
<template>
  <div class="banner2" ref="banner">
    <div class="view">
      <img
        src="https://assets.codepen.io/2002878/bilibili-winter-view-1.jpg"
        class="morning"
        alt=""
      />
      <img
        src="https://assets.codepen.io/2002878/bilibili-winter-view-2.jpg"
        class="afternoon"
        alt=""
      />
      <video autoplay loop muted class="evening">
        <source
          src="https://assets.codepen.io/2002878/bilibili-winter-view-3.webm"
          type="video/webm"
        />
      </video>
      <img
        src="https://assets.codepen.io/2002878/bilibili-winter-view-3-snow.png"
        class="window-cover"
        alt=""
      />
    </div>
    <div class="tree">
      <img
        src="https://assets.codepen.io/2002878/bilibili-winter-tree-1.png"
        class="morning"
        alt=""
      />
      <img
        src="https://assets.codepen.io/2002878/bilibili-winter-tree-2.png"
        class="afternoon"
        alt=""
      />
      <img
        src="https://assets.codepen.io/2002878/bilibili-winter-tree-3.png"
        class="evening"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startPoint: "",
    };
  },
  mounted() {
    this.$refs["banner"].addEventListener("mousemove", this.handleBannerMove);
    this.$refs["banner"].addEventListener(
      "mouseout",
      this.handleBannerMouseout
    );
    this.$refs["banner"].addEventListener(
      "mouseenter",
      this.handleBannerMouseenter
    );
  },
  methods: {
    handleBannerMove(e) {
      // console.log(e.clientX/window.outerWidth)
      this.$refs["banner"].classList.add("move");
      let percentage = (e.clientX - this.startPoint) / window.outerWidth + 0.5;
      this.$refs["banner"].style.setProperty("--percentage", percentage);
    },
    handleBannerMouseenter(e) {
      this.startPoint = e.clientX;
    },
    handleBannerMouseout(e) {
      this.$refs["banner"].classList.remove("move");
      this.$refs["banner"].style.setProperty("--percentage", 0.5);
    },
  },
};
</script>

<style scoped lang="stylus">
.banner2 {
  width: 1920px;
  width: 100vw;
  height: 160px;
  // background: #f00;
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  --percentage: 0.5;

  .afternoon {
    z-index: 10;
    opacity: calc(1 - (var(--percentage) - 0.5) / 0.5);
  }

  .morning {
    z-index: 20;
    opacity: calc(1 - (var(--percentage) - 0.25) / 0.25);
  }

  .view, .tree {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(calc(var(--percentage) * 100px));
  }

  .view, .tree, .afternoon, .morning {
    transition: 0.2s all ease-in;
  }

  .tree {
    transform: translateX(calc(var(--percentage) * 50px));
  }

  img, video {
    position: absolute;
    display: block;
    width: 120%;
    height: 100%;
    object-fit: cover;
    max-width: 1000%;
  }
}

.banner2.move {
  .view, .tree, .afternoon, .morning {
    transition: none;
  }
}
</style>
<style >
/* .side-bar {
  display: none;
} */
</style>
```
:::

## 实现的思路
首先，思路是我看其他人视频获得的，然后跟着写了一遍

这个图内有好几张图叠在一起，分为早上、下午、晚上 我们可以根据`z-index`的值来决定它们的堆叠顺序

然后我们根据鼠标的位置，改变图片的`opacity`(透明度)属性来显示下面的图片，比如移到最右边的时候，早上和下午的图透明度就都设置为0

<!-- ## 视频教程
<br>
<iframe src="//player.bilibili.com/player.html?aid=203346403&bvid=BV18h411f7dY&cid=272824938&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="560" > </iframe> -->
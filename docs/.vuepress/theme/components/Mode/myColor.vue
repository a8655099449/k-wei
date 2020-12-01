<!--
 * @Date: 2020-11-28 12:06:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-01 16:56:14
 * @FilePath: \my-node\docs\.vuepress\theme\components\Mode\myColor.vue
 * @desc: Do not edit
-->
<template>
  <div :class="{ 'my-color': true, isDrak: isDrak }" @click="changeMode">
    <div class="div1">
      <img src="/images/mode/drak.png" alt="" />
    </div>
    <div class="div2">
      <img src="/images/mode/light.png" alt="" />
    </div>
  </div>
</template>

<script>
import applyMode from "./applyMode";
export default {
  data() {
    return {
      isDrak: true,
    };
  },
  mounted() {
    let mode = localStorage.getItem("mode") || "light";
    this.isDrak = mode === "dark";
    applyMode(mode);
  },
  methods: {
    changeMode() {
      // 

      if (!this.isDrak) {
        // localStorage.setItem()
        applyMode("dark");
      } else {
        applyMode("light");
      }
      let mode = !this.isDrak ? 'dark' : 'light'
      localStorage.setItem('mode',mode)
      this.isDrak = !this.isDrak;
    },
  },
};
</script>

<style lang="stylus">
.my-color {
  width: 32px;
  height: 32px;
  position: relative;
  transform-style: preserve-3d;
  transition: 1s;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
  transform: rotateY(180deg);

  // overflow: hidden;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 50%;
    top: 0;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .div1 {
    background-color: #000;
  }

  .div2 {
    background-color: #ffb578;
    transform: rotateY(-180deg);
  }

  /* &:hover {
    transform: rotateY(180deg);
  } */
}

.isDrak {
  transform: rotateY(0deg);
}
</style>
<!--
 * @Date: 2020-11-28 10:41:50
 * @LastEditors: kuangw
 * @LastEditTime: 2020-11-28 20:09:49
 * @FilePath: \my-node\docs\.vuepress\theme\components\homeText.vue
 * @desc: Do not edit
-->
<template>
  <div class="home-center-text">
    <p>{{ text }} <span v-show="focusShow">|</span></p>
  </div>
</template>

<script>
import arr from "../helpers/home-text";

export default {
  data() {
    return {
      text: "",
      focusShow: true,
    };
  },
  mounted() {
    this.startInpText();
  },

  methods: {
    // 启动一个开始打字的定时器
    startInpText() {
      this.focusShow = true;
      let getRomdonText = this.getRomdonText();
      // this.text = getRomdonText
      let textLen = getRomdonText.length;
      let count = 0;
      this.startTimer = setInterval(() => {
        this.text += getRomdonText[count];
        count++;
        if (count == textLen) {
          this.focusShow = false;
          clearInterval(this.startTimer);

          this.Timeout2 = setTimeout(() => {
            this.startDelteTimer();
          }, 5000);
        }
      }, 200);
    },
    startDelteTimer() {
      this.focusShow = true;

      this.delteTimer = setInterval(() => {
        this.text = this.text.substr(0, this.text.length - 1);
        if (this.text.length === 0) {
          this.focusShow = false;

          clearInterval(this.delteTimer);
          this.Timeout1 = setTimeout(() => {
            this.startInpText();
          }, 1000);
        }
      }, 50);
    },
    getRomdonText() {
      return arr[parseInt(Math.random() * arr.length)];
    },
    clertAllTimer() {
      clearInterval(this.delteTimer);
      clearInterval(this.startTimer);
      clearTimeout(this.Timeout1);
      clearTimeout(this.Timeout2);
    },
  },
  computed: {},
  destroyed() {
    this.clertAllTimer();
  },
};
</script>

<style lang="stylus">
.home-center-text {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d6dce5;

  p {
    font-size: 2rem;
    width: 80%;
    font-family: Regular, cursive;
    transition: all 0.25s ease-in-out 0.04s;
  }

  span {
    margin-left: 10px;
    animation: flicker 1s infinite;
  }
}

@keyframes flicker {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
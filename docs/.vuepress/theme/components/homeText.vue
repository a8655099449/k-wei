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
    <p v-show="enshow">{{ entext }} <span v-show="focusShow">|</span></p>
  </div>
</template>

<script>
import arr from "../helpers/home-text";

export default {
  data() {
    return {
      text: "",
      entext: "",
      focusShow: true,
      enshow:false
    };
  },
  mounted() {
    this.startInpText();
  },

  methods: {
    // 启动一个开始打字的定时器
    startInpText() {
      this.focusShow = true;
      let romdonText = this.getRomdonText();
      if (!romdonText.zh) {
        return this.startZhTimer(romdonText, true);
      }

      this.startZhTimer(romdonText.zh, true);
      this.startZhTimer(romdonText.en, false);
      // console.log('准备启动中英双语定时器');

      // this.text = getRomdonText
    },

    startZhTimer(text, iszh = true) {
      this.enshow = !iszh

      let textLen = text.length;
      let allTime = 1000 * 5;
      let intTime = Math.ceil(allTime / textLen);
      let clearTime = Math.ceil(allTime / textLen / 3);
      let count = 0;
      let timer = setInterval(() => {
        if (iszh) {
          this.text += text[count];
        } else {
          this.entext += text[count];
        }
        count++;
        if (count == textLen) {
          this.focusShow = false;
          clearInterval(timer);
          this.Timeout2 = setTimeout(() => {
            this.startDelteTimer(clearTime, iszh);
          }, 5000);
        }
      }, intTime);
      if (iszh) {
        this.enTimer = timer;
      } else {
        this.zhTimer = timer;
      }
    },

    startDelteTimer(clearTime, iszh) {
      this.focusShow = true;

      let timer = setInterval(() => {
        if (iszh) {
          this.text = this.text.substr(0, this.text.length - 1);
          if (this.text.length === 0) {
            this.focusShow = false;

            clearInterval(timer);
            this.Timeout1 = setTimeout(() => {
              this.startInpText();
            }, 1000);
          }
        } else {
          this.entext = this.entext.substr(0, this.entext.length - 1);
          if (this.entext.length === 0) {
            this.focusShow = false;
            clearInterval(timer);
          }
        }
      }, clearTime);

      if (iszh) {
        this.enTimer2 = timer;
      } else {
        this.zhTimer2 = timer;
      }

    },
    getRomdonText() {
      return arr[parseInt(Math.random() * arr.length)];
    },
    clertAllTimer() {
      // clearInterval(this.delteTimer);
      // clearInterval(this.startTimer);
      clearInterval(this.enTimer );
      clearInterval(this.zhTimer );
      clearInterval(this.enTimer2 );
      clearInterval(this.zhTimer2 );


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
  flex-wrap wrap;
  flex-direction column

  p {
    font-size: 2rem;
    width: 80%;
    font-family: Regular, cursive;
    transition: all 0.25s ease-in-out 0.04s;
    height 100px
    margin: 0 auto; 
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
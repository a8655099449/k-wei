<!--
 * @Author: your name
 * @Date: 2020-11-27 16:48:49
 * @LastEditTime: 2020-11-27 17:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\theme\components\bgVideo.vue
-->

<template>
  <div class="bg-video" ref="body">
    <video
      :src="videoSrc"
      autoplay
      ref="video"
      class="mian-video"
      muted
    ></video>
  </div>
</template>

<script>


export default {
  data() {
    return {
      videoSrc:'http://image.woai996.com/video/home.mp4'
    }
  },
  mounted() {
    console.log("我加载了");
    this.video = this.$refs.video;
    // console.log(this.$refs.video);
    document.addEventListener;
    this.video.addEventListener("ended", this.palyed);
  },
  methods: {
    palyed() {
      // ~ 播放结束时重新开始播放
      this.video.play();
      // consol;
    },
  },
};
</script>

<style  lang="stylus">
.bg-video {
  width: 100%;
  height: 100%;
  background-color: #2d4d67;
  position: relative;
}

.mian-video {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.xl-chrome-ext-bar {
  display: none;
}

@media (max-width: $MQMobile) {
  .mian-video {
    width: auto;
    height: 100vh;
  }
}
</style>

<!--
 * @Author: your name
 * @Date: 2020-11-27 16:48:49
 * @LastEditTime: 2020-12-28 07:10:02
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\theme\components\bgVideo.vue
-->

<template>
  <div class="bg-video" ref="body">
    <!--  <video
      src="http://image.woai996.com/video/home.mp4"
      autoplay
      ref="video"
      class="mian-video"
      muted
    ></video> -->

    <!-- <video src="http://image.woai996.com/video/home3.mp4" ref="video" class="mian-video" x5-playsinline="" playsinline="" webkit-playsinline="" /> -->
    <!-- <video src="http://image.woai996.com/video/home3.mp4" ref="video" webkit-playsinline="true" x-webkit-airplay="true"  playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" /> -->
    <!-- 背景的视频 -->
    <video
      :src="getVideoSrc"
      ref="video"
      webkit-playsinline="true"
      x-webkit-airplay="true"
      playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      class="mian-video"
      v-if="showVideo"
    />
    <!--  -->
    <!-- 下拉箭头 -->

    <!--    <div class="canvas-warp">
      <canvas ref="canvas" :height="canvas_h" :width="canvas_w" class="main-canvas"></canvas>
    </div> -->
  </div>
</template>


<script>
// const video_arr = ["home-3", "home-4", "home-5", "home-6", "home-8"];
const video_arr = [
  "home-16",
  "home-17",
  "home-18",
  "home-19",
  "home-20",
  "home-21",
  "home-22",
  "home-23",
  "home-24",
  "home-25",
  "home-26",
  "home-27",
];
const video_arr2 = [
  "//image.woai996.com/bgVideo/home-3.mp4",
  "//image.woai996.com/bgVideo/home-4.mp4",
  "//image.woai996.com/bgVideo/home-5.mp4",
  "//image.woai996.com/bgVideo/home-6.mp4",
  "//image.woai996.com/bgVideo/home-8.mp4",
  "//image.woai996.com/bgVideo/home-9.mp4",
  "//image.woai996.com/bgVideo/home-10.mp4",
  "//image.woai996.com/bgVideo/home-11.mp4",
  "//image.woai996.com/bgVideo/home-12.mp4",
  "//image.woai996.com/bgVideo/home-13.mp4",
  "//image.woai996.com/bgVideo/home-14.mp4",
  "//image.woai996.com/bgVideo/home-15.mp4",
  "//image.woai996.com/bgVideo/home-16.mp4",
  "//image.woai996.com/bgVideo/home-17.mp4",
  "//image.woai996.com/bgVideo/home-18.mp4",
  "//image.woai996.com/bgVideo/home-19.mp4",
  "//image.woai996.com/bgVideo/home-20.mp4",
  "//image.woai996.com/bgVideo/home-21.mp4",
  "//image.woai996.com/bgVideo/home-22.mp4",
  "//image.woai996.com/bgVideo/home-23.mp4",
  "//image.woai996.com/bgVideo/home-24.mp4",
  "//image.woai996.com/bgVideo/home-25.mp4",
  "//image.woai996.com/bgVideo/home-26.mp4",
  "//image.woai996.com/bgVideo/home-27.mp4",
];
export default {
  data() {
    return {
      videoSrc: "@theme",
      canvas_h: 1920,
      canvas_w: 1080,
      showVideo: true,
    };
  },

  mounted() {
    this.video = this.$refs.video;
    this.body = this.$refs.body;
    // console.log("我加载了");

    // this.canvas = this.$refs.canvas;
    // this.ctx = this.canvas.getContext("2d");
    // this.canvas_w = this.body.offsetWidth;
    // this.canvas_h = this.body.offsetHeight;

    // window.addEventListener("resize", this.clientSizeChange);
    // this.video.addEventListener("play", this.drawImage);
    this.initVideo();
    /*     location.href="/home"
    location.href="/" */

    // this.$router.push({path:'/home'})
    // this.$router.replace({path:'/'});
  },
  computed: {
    getVideoSrc() {
      // return require(`../local/${video_arr[parseInt(Math.random() * video_arr.length)]}.mp4`);
      // return require(`../local/home-27.mp4`);
      // return require(`../local/home-15.mp4`);
      return video_arr2[parseInt(Math.random() * video_arr2.length)];
      // return `http://image.woai996.com/video/home3.mp4`;
      // return require(``)
    },
  },
  methods: {
    initVideo() {
      this.video.loop = true;
      this.video.muted = true;
      // this.video.play();
      /* if (/MicroMessenger/gis.test(navigator.userAgent.toLowerCase())) {
        return setTimeout(() => {
          this.video.play();
        }, 500);
      } */
      this.video.play();
      

    },
    drawImage() {
      setInterval(() => {
        if (this.canvas_w > 1500) {
          this.ctx.drawImage(
            this.video,
            0,
            0,
            this.canvas_w,
            this.canvas_w / 1.7
          );
        } else {
          this.ctx.drawImage(
            this.video,
            -(this.canvas_h * 1.7) / 3,
            0,
            this.canvas_h * 1.7,
            this.canvas_h
          );
        }
      }, 16);
    },
    clientSizeChange() {
      this.canvas_w = this.body.offsetWidth;
      this.canvas_h = this.body.offsetHeight;
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
  left: 50%;
  transform: translateX(-50%);
}

.main-canvas {
}

.canvas-warp {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.mian-video {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  // opacity: 0;
}

.xl-chrome-ext-bar {
  display: none;
}

@media (max-width: 1670px) {
  .mian-video {
    width: auto;
    height: 100vh;
  }
}
</style>

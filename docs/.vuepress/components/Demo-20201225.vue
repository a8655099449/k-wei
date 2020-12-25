<!--
 * @Date: 2020-12-14 05:53:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-25 10:20:44
 * @FilePath: \my-node\docs\.vuepress\components\Demo-20201214.vue
 * @desc: Do not edit
-->
<template>
  <div class="bilibili-banner" ref="bannner">
    <div>
      <img src="https://assets.codepen.io/2002878/bilibili-autumn-1.png" />
    </div>
    <div>
      <img src="https://assets.codepen.io/2002878/bilibili-autumn-2.png" />
    </div>
    <div>
      <img src="https://assets.codepen.io/2002878/bilibili-autumn-3.png" />
    </div>
    <div>
      <img src="https://assets.codepen.io/2002878/bilibili-autumn-4.png" />
    </div>
    <div>
      <img src="https://assets.codepen.io/2002878/bilibili-autumn-5.png" />
    </div>
    <div>
      <img src="https://assets.codepen.io/2002878/bilibili-autumn-6.png" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.bannner);
    this.images = this.$refs.bannner.querySelectorAll("img");
    this.$refs.bannner.addEventListener("mousemove", this.changeMove);
    this.$refs.bannner.addEventListener("mouseout", this.setDefault);
    this.setDefault()
  },
  methods: {
    changeMove(e) {
      let images = this.images;
      let percentage = e.clientX / window.outerWidth;
      let offset = 10 * percentage;
      let blur = 20;
      // console.log(percentage)
      for (let [index, image] of images.entries()) {
        offset *= 1.3;

        let blurValue = Math.pow(index / images.length - percentage, 2) * blur;
        // console.log(blurValue, offset)
        image.style.setProperty("--offset", `${offset}px`);
        image.style.setProperty("--blur", `${blurValue}px`);
      }
    },
    setDefault() {
      let images = this.images
      let percentage = 0.527;
      let blur = 20;
      let offset = 10 * percentage;

      for (let [index, image] of images.entries()) {
        let blurValue = Math.pow(index / images.length - percentage, 2) * blur;
        // console.log(blurValue, offset)
        image.style.setProperty("--offset", `${offset}px`);
        image.style.setProperty("--blur", `${blurValue}px`);
      }
    },
  },
};
</script>

<style scoped>
.bilibili-banner {
  height: 160px;
  position: relative;
  overflow: hidden;
  width: 1920px;
  left: 50%;
  transform: translateX(-50%);
}

.bilibili-banner > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 7.287765842013892 11.086576921875 */
  --offset: 7.28px;
  --blur: 11.08px;
}

.bilibili-banner > div > img {
  display: block;
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: translatex(var(--offset));
  filter: blur(var(--blur));
}
</style>
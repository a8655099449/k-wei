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

 .view img,.tree img,  video {
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
.side-bar {
  display: none;
}
</style>
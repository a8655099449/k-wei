<template>
  <div class="lottery">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="item"
      :class="{
        active: index == activeIndex,
      }"
    >
      {{ item }}
    </div>
    <div class="item btn" @click="start">开始抽奖</div>
    <div class="text" v-if="!isActive">
      {{ text }}
    </div>
    <div class="text" v-else>抽奖中...</div>
  </div>
</template>

<script>
const list = [
  "一等奖",
  "二等奖",
  "三等奖",
  "四等奖",
  "五等奖",
  "六等奖",
  "七等奖",
  "谢谢参与",
];
export default {
  data() {
    return {
      activeIndex: null,
      interval: 500, // 定时器的间隔
      list, //
      circle: 2 * 8, // 转几圈
      selectIndex: null, // 产生中奖的索引 点击抽奖时产生
      isActive: false,
      text: "开始抽奖",
    };
  },
  methods: {
    start(e) {
      if (this.isActive) return;
      this.startTimer();
    },
    startTimer() {
      this.activeIndex = this.selectIndex;
      this.circle = (3 + parseInt(Math.random() * 3)) * 8 + (8 - this.activeIndex);
      this.selectIndex = parseInt(Math.random() * 8);
      this.circle += this.selectIndex;
      this.isActive = true;
      this.interval = 500;
      setTimeout(this.handleTimeout, this.interval);
    },
    handleTimeout() {
      this.activeIndex++;
      this.circle--;
      if (this.interval > 100 && this.circle > 10) {
        this.interval -= 50;
      }

      if (this.activeIndex >= 8) {
        this.activeIndex = 0;
      }
      if (this.circle < 10) {
        this.interval += 50;
      }
      console.log(this.interval);
      if (this.circle == 0) {
        // alert();
        this.text = this.list[this.selectIndex];
        this.isActive = false;
        return;
      }

      setTimeout(this.handleTimeout, this.interval);
    },
  },
};
</script>

<style scoped lang="stylus">
.lottery {
  width: 300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 350px;
  --item-height: 80px;
  --offset: 20px;

  * {
    box-sizing: border-box;
  }

  .text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }

  .item {
    width: calc(((100% - 40px) / 3));
    // border: 1px solid #000;
    height: var(--item-height);
    // margin-right: 20px;
    // margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;

    &:nth-child(2) {
      left: calc(((100% - 40px) / 3) + var(--offset));
    }

    &:nth-child(3) {
      left: calc(((100% - 40px) / 3) * 2 + var(--offset) * 2);
    }

    &:nth-child(4) {
      left: calc(((100% - 40px) / 3) * 2 + var(--offset) * 2);
      top: calc(var(--item-height) + 20px);
    }
    &:nth-child(5) {
      top: calc(var(--item-height) * 2 + var(--offset) * 2);
      left: calc(((100% - 40px) / 3) * 2 + var(--offset) * 2);
    }

    &:nth-child(6) {
      top: calc(var(--item-height) * 2 + var(--offset) * 2);
      left: calc(((100% - 40px) / 3) + var(--offset));
    }

    &:nth-child(7) {
      top: calc(var(--item-height) * 2 + var(--offset) * 2);
    }

    &:nth-child(8) {
      top: calc(var(--item-height) + 20px);
    }

    &:nth-child(9) {
      left: calc(((100% - 40px) / 3) + var(--offset));
      top: calc(var(--item-height) + 20px);
    }
  }

  .item.btn {
    box-shadow: none;
    background-color: #f00;
    color: #fff;
    cursor: pointer;
  }

  .item.active {
    box-shadow: none;
    background-color: #65f4c8;
    color: #fff;
  }
}
</style>
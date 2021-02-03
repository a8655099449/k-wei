<template>
  <div class="loading-warp">
    <div class="loading1" v-if="showtype == 1"></div>
    <div class="loading2" v-if="showtype == 2"></div>
    <div class="loading3" v-if="showtype == 3">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="loading4" v-if="showtype == 4"></div>
    <div class="loading5" v-if="showtype == 5"></div>
    <div class="loading6" v-if="showtype == 6">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="loading7" v-if="showtype == 7">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="loading8" v-if="showtype == 8">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="loading9" v-if="showtype == 9">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showtype: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style scoped lang="stylus">
.loading-warp {
  height: 300px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  --color1: #98e8a6;
  --color2: #abdae0;

  .loading1 {
    width: 50px;
    height: 50px;
    position: relative;

    &::before, &::after {
      content: '';
      display: block;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: var(--color1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      animation: loading1_lt 2s linear infinite;
    }

    &::after {
      animation: loading1_gt 2s linear infinite;
      background: var(--color2);
    }

    @keyframes loading1_lt {
      0% {
        transform: scale(1) translate(-50%, 0);
      }

      25% {
        transform: scale(0.5) translate(0, -44%);
      }

      50% {
        transform: scale(1) translate(50%, 0);
      }

      75% {
        transform: scale(1.5) translate(0, 10%);
      }

      100% {
        transform: scale(1) translate(-50%, 0);
      }
    }

    @keyframes loading1_gt {
      0% {
        transform: scale(1) translate(50%, 0);
      }

      25% {
        transform: scale(1.5) translate(0, 10%);
      }

      50% {
        transform: scale(1) translate(-50%, 0);
      }

      75% {
        transform: scale(0.5) translate(0, -44%);
      }

      100% {
        transform: scale(1) translate(50%, 0);
      }
    }
  }

  .loading2 {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid var(--color1);
    border-bottom-color: transparent;
    animation: loading2_mov 0.75s linear infinite;
  }

  @keyframes loading2_mov {
    0% {
      transform: rotate(0deg);
      border: 2px solid var(--color1);
      border-bottom-color: transparent;
    }

    100% {
      transform: rotate(360deg);
      border: 2px solid var(--color2);
      border-bottom-color: transparent;
    }
  }

  .loading3 {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .loading3 span {
    // display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: var(--color1);
    animation: loading3_mov 1s ease infinite;
  }

  .loading3 span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loading3 span:nth-child(3) {
    animation-delay: 0.4s;
  }

  .loading3 span:nth-child(4) {
    animation-delay: 0.6s;
  }

  .loading3 span:nth-child(5) {
    animation-delay: 0.8s;
  }

  @keyframes loading3_mov {
    0%, 100% {
      height: 50%;
      background: var(--color1);
    }

    50% {
      height: 100%;
      margin: -15px 0;
      background: var(--color2);
    }
  }

  .loading4 {
    width: 200px;
    height: 4px;
    border-radius: 2px;
    position: relative;
    background: var(-color1);
    animation: loading4changeBgColor 1.04s ease-in infinite alternate;
  }

  .loading4::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(-color1);
    position: absolute;
    animation: loading4changePosition 1.04s ease-in infinite alternate;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @keyframes loading4changeBgColor {
    0% {
      background: var(--color1);
    }

    100% {
      background: var(--color2);
    }
  }

  @keyframes loading4changePosition {
    0% {
      background: var(--color1);
      left: -8px;
    }

    100% {
      left: 100%;
      background: var(--color2);
    }
  }

  .loading5 {
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
  }

  .loading5::before, .loading5::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    animation: load5_bigdot 2s infinite;
  }

  .loading5::before {
    opacity: 0.6;
    animation: load5_bigdot 2s infinite;
  }

  .loading5::after {
    opacity: 0.4;
    animation: loading5_small_dot 2s infinite;
  }

  @keyframes load5_bigdot {
    0% {
      transform: scale(2);
      background: var(--color1);
    }

    50% {
      transform: scale(0);
      background: var(--color2);
    }

    100% {
      transform: scale(2);
      background: var(--color1);
    }
  }

  @keyframes loading5_small_dot {
    0% {
      transform: scale(0);
      background: var(--color2);
    }

    50% {
      transform: scale(2);
      background: var(--color1);
    }

    100% {
      transform: scale(0);
      background: var(--color2);
    }
  }

  .loading6 {
    display: flex;
    justify-content: center;
  }

  .loading6 span {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
    animation: loading6_mov 0.5s ease 0s infinite alternate;
  }

  .loading6 span:nth-child(1) {
    animation-delay: 0s;
  }

  .loading6 span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .loading6 span:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes loading6_mov {
    from {
      /* ç¼©æ”¾ */
      transform: scale(1);
      background-color: var(--color1);
    }

    to {
      transform: scale(0.4);
      background-color: var(--color2);
    }
  }

  .loading7 {
    width: 150px;
    height: 15px;
    position: relative;
  }

  .loading7 span {
    position: absolute;
    width: 15px;
    height: 100%;
    border-radius: 50%;
    animation: load7_mov 1.04s ease-in infinite alternate;
    left: 0;
  }

  .loading7 span:nth-child(1) {
    animation-delay: 0.13s;
  }

  .loading7 span:nth-child(2) {
    animation-delay: 0.26s;
  }

  .loading7 span:nth-child(3) {
    animation-delay: 0.39s;
  }

  .loading7 span:nth-child(4) {
    animation-delay: 0.52s;
  }

  .loading7 span:nth-child(5) {
    animation-delay: 0.65s;
  }

  @keyframes load7_mov {
    0% {
      opacity: 0.2;
      transform: scale(0.5);
      // transform: translateX(0);
      background-color: var(--color2);
      left: 0;
    }

    50% {
      transform: scale(1);
    }

    100% {
      opacity: 1;
      // transform: translateX(100%);
      transform: scale(0.5);
      background-color: var(--color1);
      left: 100%;
    }
  }

  .loading8 {
    width: 150px;
    height: 15px;
    display: flex;
    justify-content: space-between;
  }

  .loading8 span {
    width: 15px;
    height: 100%;
    animation: loading8 1.04s ease infinite;
  }

  .loading8 span:last-child {
    margin-right: 0px;
  }

  .loading8 span:nth-child(1) {
    animation-delay: 0.13s;
  }

  .loading8 span:nth-child(2) {
    animation-delay: 0.26s;
  }

  .loading8 span:nth-child(3) {
    animation-delay: 0.39s;
  }

  .loading8 span:nth-child(4) {
    animation-delay: 0.52s;
  }

  .loading8 span:nth-child(5) {
    animation-delay: 0.65s;
  }

  @keyframes loading8 {
    0% {
      opacity: 1;
      background: var(--color1);
    }

    100% {
      opacity: 0.3;
      background: var(--color2);
    }
  }

  .loading9 {
    width: 100px;
    height: 100px;
    position: relative;

  }

  .loading9 span {
    display: inline-block;
    width: 16%;
    height: 16%;
    border-radius: 50%;
    background: lightgreen;
    position: absolute;
    animation: loadEff 1.04s ease infinite;
    --offset : 14%;
  }

  .loading9 span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -8px;
    animation-delay: 0.13s;
  }

  .loading9 span:nth-child(2) {
    left: var(--offset);
    top: var(--offset);
    animation-delay: 0.26s;
  }

  .loading9 span:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -8px;
    animation-delay: 0.39s;
  }

  .loading9 span:nth-child(4) {
    top: var(--offset);
    right: var(--offset);
    animation-delay: 0.52s;
  }

  .loading9 span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -8px;
    animation-delay: 0.65s;
  }

  .loading9 span:nth-child(6) {
    right: var(--offset);
    bottom: var(--offset);
    animation-delay: 0.78s;
  }

  .loading9 span:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -8px;
    animation-delay: 0.91s;
  }

  .loading9 span:nth-child(8) {
    bottom: var(--offset);
    left: var(--offset);
    animation-delay: 1.04s;
  }

  @keyframes loadEff {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      opacity: 0.2;
      transform: scale(0.5);
    }
  }
}
</style>
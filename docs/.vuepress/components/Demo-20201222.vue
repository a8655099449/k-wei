<!--
 * @Date: 2020-12-14 05:53:05
 * @LastEditors: kuangw
 * @LastEditTime: 2020-12-22 06:45:17
 * @FilePath: \my-node\docs\.vuepress\components\Demo-20201222.vue
 * @desc: Do not edit
-->
<template>
  <div class="warp">
    <button>赛博朋克</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.warp {
  background-color: #f8f004;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.warp button,
.warp button::after {
  width: 380px;
  height: 86px;
  font-size: 36px;
  background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
  color: #fff;
  border: 0;
  letter-spacing: 3px;
  box-shadow: 6px 0 0 #00e6f6;
  outline: transparent;
  position: relative;
  cursor: pointer;
}

.warp button::after {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  content: "赛博朋克";
  text-shadow: -3px -3px 0 #f8f004, 3px 3px 0px #00e6f6;
  background: linear-gradient(
    45deg,
    transparent 3%,
    #00e6f6 3%,
    #00e6f6 5%,
    #ff013c 5%
  );
  display: block;
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  clip-path: var(--slice-0);
  transform: translate(-20px, -10px);
}

.warp button:hover::after {
  animation: 1s glich steps(2, end);
}
@keyframes glich {
  0% {
    clip-path: var(--slice-2);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(-10px, -5px);
  }
  20% {
    clip-path: var(--slice-4);
    transform: translate(5px, 0px);
  }
  30% {
    clip-path: var(--slice-0);
    transform: translate(10px, 20px);
  }
  40% {
    clip-path: var(--slice-1);
    transform: translate(0px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(20px, 5px);
  }
  60% {
    clip-path: var(--slice-2);
    transform: translate(-10px, -5px);
  }
  70% {
    clip-path: var(--slice-0);
    transform: translate(6px, 4px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(-10px, -10px);
  }
  90% {
    clip-path: var(--slice-2);
    transform: translate(12px, 14px);
  }
  100% {
    clip-path: var(--slice-5);
    transform: translate(0px, 0px);
  }
}
</style>
<template>
  <div class="warp">
    <label for="swich">
      <!-- 如果我们仅仅使用css，则需要使用一个checkbox来控制 -->
      <input type="checkbox" id="swich" />
      <span></span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.warp {
  width: 100%;
  // background: #eee;
  border: 1px solid #eee;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  // 设置一些需要使用的css变量
  --button-width: 500px;
  --button-height: 295px;
  --toggle-diameter: 255px;
  --button-toggle-offset: calc(((var(--button-height) - var(--toggle-diameter)) / 2));
  --toggle-shadow-offset: 10px;
  --toggle-wider: 333px;
  --color-grey: #E9E9E9;
  --color-dark-grey: #39393D;
  --color-green: #30D158;

  // 容器
  span {
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    border-radius: calc((var(--button-height) / 2));
    background-color: var(--color-grey);
    position: relative;
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    // 中间小圆环的样式
    &:after {
      content: '';
      display: inline-block;
      width: var(--toggle-diameter);
      height: var(--toggle-diameter);
      background-color: #fff;
      border-radius: calc((var(--toggle-diameter) / 2));
      position: absolute;
      top: var(--button-toggle-offset);
      transform: translateX(var(--button-toggle-offset));
      box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
      transition: 0.3s all ease-in-out;
    }
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + span {
    background-color: var(--color-green);
  }

  input[type='checkbox']:checked + span:after {
    transform: translateX(calc(var(--button-width) - var(--button-toggle-offset) - var(--toggle-diameter)));
  }

  // 添加长按样式
  input[type='checkbox']:active + span:after {
    width: calc(var(--toggle-diameter) + var(--button-toggle-offset));
  }

  input[type='checkbox']:checked:active + span:after {
    width: calc(var(--toggle-diameter) + var(--button-toggle-offset));
    transform: translateX(calc(var(--button-width) - var(--button-toggle-offset) - var(--button-toggle-offset) - var(--toggle-diameter)));
  }
}
</style>
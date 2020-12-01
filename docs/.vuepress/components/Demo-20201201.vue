<!--
 * @Author: your name
 * @Date: 2020-12-01 15:44:39
 * @LastEditTime: 2020-12-01 16:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\components\TestCom.vue
-->
<template>
  <div class="app" ref="app">
    <button @click="changeTheme">切换</button>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero
      odio sint nisi vitae, ipsa quisquam odit nobis fugit, consequuntur minus
      tempora quas corporis voluptas eos dolore. Quasi, temporibus quos?
    </p>
  </div>
</template>

<script>
const lightTheme = {
  "--bg-color": "#fff",
  "--text-color": "#999",
};
const drakTheme = {
  "--bg-color": "#000",
  "--text-color": "#f07b1f",
};

export default {
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      let themeObj;
      if ((this.theme == "light")) {
        themeObj = drakTheme;
        this.theme = "drak";
      } else {
        themeObj = lightTheme;
        this.theme = "light";
      }
      // console.log(this.appDom.style.setProperty);
      for (const key in themeObj) {
        this.appDom.style.setProperty(key,themeObj[key]);
      }
    },
  },
  mounted() {
    console.log();
    this.appDom = this.$refs["app"];
  },
};
</script>

<style scoped >
.app {
  --bg-color: #fff;
  --text-color: #999;
  border: 1px solid #eee;
  padding: 20px;
  margin: 20px 0;
  color: var(--text-color);
  background-color: var(--bg-color);
}
</style>
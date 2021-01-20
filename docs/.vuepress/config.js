/*
 * @Author: your name
 * @Date: 2020-11-20 14:08:50
 * @LastEditTime: 2021-01-18 21:28:03
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\config.js
 */

const themeConfig_reco = require("./config/themConfig-reco");
const themeConfig_default = require("./config/themConfig-default");
module.exports = {
  ...themeConfig_reco,
  // base:'/static-blog/',
  dest: "../k-wei-2",
  markdown: {
    // extractHeaders: ["h2", "h3", "h4", "h5", "h6"],

    lineNumbers: true,
  },
  plugins: {
    "vuepress-plugin-nuggets-style-copy": {
      copyText: "复制代码",
      tip: {
        content: "复制成功!",
      },
    }
  },
};

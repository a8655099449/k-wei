

const themeConfig_reco = require("./config/themConfig-reco");
const themeConfig_default = require("./config/themConfig-default");
module.exports = {
  ...themeConfig_reco,
  // base:'/static-blog/',
  dest: "../k-wei-2",
  markdown: {
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

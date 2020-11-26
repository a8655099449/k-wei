/*
 * @Author: your name
 * @Date: 2020-11-20 14:08:50
 * @LastEditTime: 2020-11-26 17:48:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\config.js
 */


const themeConfig_reco = require('./config/themConfig-reco');
const themeConfig_default = require('./config/themConfig-default');
module.exports = {
  ...themeConfig_reco,
  markdown: {
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
}


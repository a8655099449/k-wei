/*
 * @Author: your name
 * @Date: 2020-11-26 17:36:46
 * @LastEditTime: 2020-11-26 17:40:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\config\themConfig-reco.js
 */
const nav = require("./nav")

const sidebar = require('./sidebar')

const themeConfig = {
  logo: "/images/logo.png",
  nav,
  sidebar,
  displayAllHeaders: true,
  lastUpdated: "2020年11月21日",
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: "https://gitee.com/kuangweiwudi/my-node",
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: 'GitHub',

  // 以下为可选的编辑链接选项
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: "提出错误！",
}
module.exports = themeConfig

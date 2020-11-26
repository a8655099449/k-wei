/*
 * @Author: your name
 * @Date: 2020-11-26 17:36:46
 * @LastEditTime: 2020-11-26 21:17:59
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\config\themConfig-reco.js
 */
const nav = require("./nav")
const head = require('./head');
nav.push({ text: '时间线', link: '/timeline/', icon: 'reco-date' })
const themeConfig = {
  type: 'blog',
  nav,
  logo: '/images/logo.png',
  record: 'ICP 备案文案',
  recordLink: 'ICP 备案指向链接',
  cyberSecurityRecord: '公安部备案文案',
  cyberSecurityLink: '公安部备案指向链接',
  // 项目开始时间，只填写年份
  startYear: '2020',
  author: 'kuangw',
  subSidebar: 'auto',
  repo: "https://gitee.com/kuangweiwudi/my-node",
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: 'GitHub',

  // 以下为可选的编辑链接选项
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: "提出错误！",
  blogConfig: {
    /* category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    } */
  }
}

const themeConfig_reco = {
  theme: 'reco',
  themeConfig,
  title: '地球反三体组织',
  head,
}

module.exports = themeConfig_reco

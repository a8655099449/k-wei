/*
 * @Author: your name
 * @Date: 2020-11-20 14:08:50
 * @LastEditTime: 2020-11-22 20:31:30
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\config.js
 */

const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  head:[
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  title: 'kw的博客网站',
  description: 'kw的博客网站,专注前端技术栈分享',
  themeConfig: {
    logo: '/images/logo.png',
    nav,
    sidebar,
    displayAllHeaders: true,
    lastUpdated: '2020年11月21日',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://gitee.com/kuangweiwudi/my-node',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '提出错误！'


  },
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
    // extractHeaders: [ 'h2', 'h3', 'h4']

  },
  plugins: ['@vuepress/back-to-top']
}


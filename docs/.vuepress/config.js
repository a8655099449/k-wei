/*
 * @Author: your name
 * @Date: 2020-11-20 14:08:50
 * @LastEditTime: 2020-11-20 17:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\config.js
 */

const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  title: 'kw的博客网站',
  description: 'kw的博客网站,专注前端技术栈分享',
  themeConfig: {
    logo: '/images/logo.png',
    nav,
    sidebar,
    displayAllHeaders:true
  }
}

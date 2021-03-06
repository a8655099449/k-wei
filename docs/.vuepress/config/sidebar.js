/*
 * @Author: your name
 * @Date: 2020-11-20 16:23:10
 * @LastEditTime: 2020-11-22 20:04:06
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\config\sidebar.js
 */


const sidebarGroup = [{
    title: 'group 1',
    collapsable: false,
    children: [
      '/',
      '/js/',
      '/js/es6.md',
      '/css/'
    ]
  },
  {
    title: 'Group 2',
    children: [ /* ... */ ]
  }
]
// 为不同的页面区分分组
const sidebar = {
  '/':'auto'
}
/* 
const sidebar = {
  '/css/':{
    'sass':sidebarGroup
  },
  '/js/':sidebarGroup,
  '':'auto'
}
*/

module.exports = sidebar
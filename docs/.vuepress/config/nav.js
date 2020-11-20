/*
 * @Author: your name
 * @Date: 2020-11-20 15:03:38
 * @LastEditTime: 2020-11-20 17:35:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-node\docs\.vuepress\config\nav.js
 * 
 */

const jsItems = [{
    text: 'es6',
    link: '/js/es6.md',
  },
  {
    text: 'js中的数组方法',
    link: '/js/arr-function.md',
  },
]

const cssItems = [{
  text: 'css的一些常用属性',
  link: '/css/common-fault.md',
},
{
  text: 'sass的使用',
  link: '/css/sass.md',
},
]

const elseToolItems = [
  {
    text: '其他工具1',
    link: '/',
  },
  {
    text: '其他工具2',
    link: '/',
  },
  {
    text: '其他工具3',
    link: '/',
  },
  {
    text: '其他工具4',
    link: '/',
  },
]
const toolItems = [{
    text: 'vuepress(博客框架)',
    link: '/tool/vuepress/',
  },
  {
    text: '工具类目2',
    link: '/',
  },
  {
    text: '工具类目3',
    link: '/',
  },
  {
    text: '工具类目4',
    link: '/',
  },
  {
    text: '其他工具',
    items:elseToolItems
  },
]

const nav = [{
    text: 'Home',
    link: '/'
  },
  {
    text: 'javascript',
    link: '/js/',
    items: jsItems
  },
  {
    text: 'css',
    items:cssItems
  },
  {
    text: 'vue',
    link: '/vue/'
  },
  {
    text: '小程序',
    link: '/mini-project/'
  },
  {
    text: '后端',
    link: '/server/'
  },
  {
    text: '工具',
    items: toolItems
  },


]
module.exports = nav
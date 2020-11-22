/*
 * @Author: your name
 * @Date: 2020-11-20 15:03:38
 * @LastEditTime: 2020-11-22 08:08:32
 * @LastEditors: kuangw
 * @Description: In User Settings Edit
 * @FilePath: \my-node\docs\.vuepress\config\nav.js
 * 
 */

const jsItems = [
  {
    text: '目录',
    link: '/js/catelog.md',
  },
  {
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

const vscodeItems = [
  {
    text: 'vscode插件推荐',
    link: '/tool/vscode/plug-recommend',
  },

]

const toolItems = [{
    text: 'vuepress(博客框架)',
    link: '/tool/vuepress/',
  },
  {
    text: 'vscode',
    items:vscodeItems
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
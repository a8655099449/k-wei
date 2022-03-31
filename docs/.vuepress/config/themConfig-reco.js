/*
 * @Author: your name
 * @Date: 2020-11-26 17:36:46
 * @LastEditTime: 2021-01-16 21:19:23
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
  record: 'ICP 湘ICP备2020022053号',
  recordLink: 'ICP 备案指向链接',
  cyberSecurityRecord: '公安部备案文案',
  cyberSecurityLink: '公安部备案指向链接',
  // 项目开始时间，只填写年份
  startYear: '2020',
  author: 'kuangw',
  subSidebar: 'auto',
  repo: "https://github.com/a8655099449/k-wei",
  authorAvatar: 'http://image.woai996.com/picgo/20201127101131.png',
  repoLabel: 'GitHub',
  editLinks: true,
  // valine评论的配置
  valineConfig: {
    appId: 'ymHDQk9EUdjIMwSUiMlchlwp-gzGzoHsz',// your appId
    appKey: 'iENx4PlHyXUYazTVkTofEDP8', // your appKey
  },
  editLinkText: "提出错误！",
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    }
  },
  friendLink: [
    {
      title: "后来的我们",
      desc: "一个比较好看的博客，我的博客很多地方借鉴了对方",
      // email: "1156743527@qq.com",
      link: "//zyj_yida.gitee.io/",
    },
    {
      title: "live music",
      desc: "使用react写的一个仿网易云网站",
      link: "//music.woai996.com",
    },
    {
      title: "上天的🐖",
      desc: "为啥要叫🐖",
      // email: "1156743527@qq.com",
      link: "//yan_chunli.gitee.io/blog/",
    },
  ],
}



const themeConfig_reco = {
  theme: 'reco',
  themeConfig,
  title: '地球反三体组织',
  head,
}

module.exports = themeConfig_reco

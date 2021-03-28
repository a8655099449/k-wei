---
title: nuxtjs的使用记录
date: 2021-03-27
tags:
  - 前端
  - vue
  - js
categories: code
pic: //image.woai996.com/picGo/20210327201306.png
desc:
---

## nuxt 是什么

nuxt 是一款 vue 的服务端 ssr 渲染框架， [nuxt 官网文档地址 - 关于 nuxtjs](https://www.nuxtjs.cn/guide) ，我们可以把它看成一款像 `vue-cli` 或者 `vite` 一样的脚手架工具就行，而它的特点就是在服务端渲染这方面做得比较好。

### 为什么要使用服务端渲染？

我们如果使用 vue-cli 开发打包出来的代码，一般就是`spa(单页模式)` ，这个问题在 vue 官网中也有提到[Vue.js 服务器端渲染指南](https://ssr.vuejs.org/zh/)，spa 模式虽然性能和用户体验很好，但是对于 seo 支持很不好，以下是一整个 spa 网站的代码 html 结构造函数，在 js 没有被加载前，这个网站内容就是空的

![alt](//image.woai996.com/picGo/20210327202844.png)

这一点对于需要在搜索引擎上有很大曝光的网站是一个很致命的缺陷，使用服务端渲染有以下的好处

1. 更好的 seo 支持
2. 更快首屏时间加载

也有一些缺陷

1. 少了一些钩子
2. 需要等到 nodejs 的支持
3. 更大的服务器压力

## nuxt 安装

```sh
yarn create nuxt-app <项目名>
```

## nuxt 的生命周期

调用顺序根据以下表格从上到下执行

|       name       | 调用环境       | 其他说明 |
| :--------------: | -------------- | -------- |
| `nuxtServerInit` | 服 |   定义在 `store\index.js` 内，需要导出一个`actions`对象，其中包含了这个函数    |
| `middleware` | 服 | 可以定义在 `nuxt.config.js / layout / pages` 内   |
| `validate` | 服 | 定义在`pages`内 ，用来验证参数非常合适，当 `return false`时会跳转至 `404`   |
| `asyncData` | 服 | 通常用于获取服务端数据， 可以return一个对象出来，会和data中的对象合并  |
| `beforeCreate` | 服+客 | 就和vue中通常的生命周期一样  |
| `created` | 服+客 | 就和vue中通常的生命周期一样  |
| `fetch` | 服 | 通常用于将数据推送给vuex  |
| `...vue其他钩子` | 客 | 就和vue中通常的生命周期一样  |

:::warning
在服务器能访问的钩子中，无法访问客户端的对象，比如`window`
:::

## 路由

### 一级路由

nuxt的路由是采用**约定式**的，**一级路由在`pages`目录下创建的`.vue`文件都会被自动注册页面，跳转的名字和文件名一样**

nuxt中有个 `<nuxt />` 的标签，就相当于 `<router-view />`的功能，用于承载页面的内容

还有一个 `<nuxt-link />` 相当于vue中的 `<router-link />`
 组件

### 二级路由

2级路由需要创建和1级路由名称相同的**文件夹**，就像下图

![alt](//image.woai996.com/picGo/20210328220544.png)

服务一级路由就是 `/index` 访问二级路由就是`index-new`，三级四级也是同理

### 动态路由

文件夹内以下划线开头的`_`文件都会被当成动态理由解析



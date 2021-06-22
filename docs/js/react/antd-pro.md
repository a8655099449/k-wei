---
title: antd-pro的使用
date: 2021-05-31
tags:
 - 前端
 - react
categories: code
pic: 
desc: 
---

`antd-pro` 是阿里的一个著名的后台框架库，内置了许多的后台的常用功能 如果：国际化、数据表格、权限认证，如果使用react做后台，这也许是大多数开发者的第一选。这篇文章将记录使用的一些经验

[官方文档地址](https://pro.ant.design/docs/getting-started-cn)


## 创建项目

antd-pro 是基于 [umi](https://umijs.org/zh-CN) 的脚手架来搭建的，在使用react创建项目就可以看到antd-pro的选项。
 

```sh
yarn create umi  [项目名]
```
输入这个命令他会询问我们要创建什么样的模板，我们选择`antd-pro` ，后面还会问你版本、js或ts、怎么样的模板，这个就根据自己的需要来就好了 ，这里我们使用的版本是`v4+js`的组合 ，我们学习的话，建议用一个完整模板。一个初始模板，用于模仿

之后再对应的文件夹内启动就能使用了。


## 路由配置

antd也提供了默认的两种基础布局容器，路径分别是`src\layouts\BasicLayout.jsx` 和`src\layouts\UserLayout.jsx`，一个登录的容器，一个是后台主要展示的容器，登录没啥好说的，我们主要说说`BasicLayout`这个容器

`antd-pro`的路由规则是约定式路由，我们需要在根目录下的`config\routes.js`来配置对应的目录，它使用了内置的一个强大的组件 [ProLayout](https://procomponents.ant.design/components/layout)，默认的情况下回自动的根据路由配置来渲染出左侧菜单。







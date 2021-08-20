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

我目前的工作很大一部分是写后台，这个框架对我帮助很多，如果仔细研究这个框架也可以发现很多值得学习的设计思想。





在我认为这个框架具有以下的优点

1. 大厂出品在于[antd](https://ant.design/docs/react/introduce-cn) UI框架库，质量值得肯定
2. 完美契合ts
3. 基于umi框架上手即用
4. 国人开发，文档清晰易懂，[官方文档地址](https://pro.ant.design/docs/getting-started-cn)
5. 这个框架目前还保持着持续的生命力[最新的`v5`版本](https://github.com/ant-design/ant-design-pro/issues/8656)，使用的是react最潮流的技术
6. 在最新的版本中还集合了 `OpenAPI` , `模板组件`等黑科技功能（虽然我都没用过）


本文文档使用的antd版本

|   库名   |   版本   |
| :----------: | ------------------------ |
|   antd   | 4.14.0 |
|   umi   | 3.5.0 |

## 创建项目

antd-pro 是基于 [umi](https://umijs.org/zh-CN) 的脚手架来搭建的，在使用react创建项目就可以看到antd-pro的选项。

> 这其实也是`umi`构建项目的命令 ， 如果你要使用`antd-pro` 这个后台框架。最好提前了解一下`umi`脚手架 , 就我的使用体验来说，umi完全不弱其他脚手架

```sh
yarn create umi  [项目名]
```
接下来出现的是一个问答环节，我们选择 `ant-design-pro` 然后按照喜好来选择使用`ts`还是`js`就可以了，值得一提的是，这个框架完美的契合了 `TS`，如果使用过ts的同学不妨一试。  

最后一个选项是 `simple` 和 `complete` ,  `complete`  创建的项目附带了[官网预览](https://preview.pro.ant.design/)的所有demo ， 如果是学习可以同时创建两个，自己写的用`simple` ,以 `complete` 作为参照。demo中的代码风格也绝对很多值得初中级前端学习。




## 目录结构

在官网的文档中有对于[目录结构](https://pro.ant.design/zh-CN/docs/folder)的说明 ,但在我写这篇文档时，实际结构已经有了些出入。可能是v5版本更新后文档更新不及时的问题

我们以官网的为准就行了，至于不同的地方其实出入并不大


## 国际化

antd-pro中默认就打开了国际化，如果我们不需要的话，最好在创建项目之初就清除了。不然项目写多了会有一堆麻烦的报错

框架中提供了自带的指令来删除初始项目的国际化内容
```sh
yarn i18n-remove
```

> 如果自己已经写了很多代码，使用这个指令去删除国际化就不太合适了，这时候最好自己去手动删除


## ProLayout

我们输入`yarn start` 登录完成后，就可以看到初始的框架了，而框架最外层的组件[ProLayout](https://procomponents.ant.design/components/layout) 

是最外面的一个组件，管理着侧边栏和header ，是非常重要的一个组件,

具体的api在文档中已经讲解的十分详细了。

配置的位置在 `src/app.tsx` 导出的一个 layout对象 ，这个是v5版本比较大的一个改动， ProLayout 不再是一个具体的组件了


### 侧边栏配置

默认的侧边栏配置 是根据 `config/routes.ts` 配置的内容来执行

也支持从服务器请求类配置，只要满足它提供的接口需求可以




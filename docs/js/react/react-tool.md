---
title:  不要重复的造轮子，判断react中好用的库
date: 2022-01-21
tags:
 - 前端
categories: code
pic: 
desc: 
---

在前几天看到网上写了一段很有意思的话，看的哈哈一笑

:::tip
快过年了不要再讨论什么webpack vue源码、微前端之类的了。

你带你的破电脑回到家并不能给你带来任何实质性作用朋友们兜里掏大把钱吃喝玩乐，你默默的在家里摆弄你的破烂框架。亲戚朋友吃饭问你收获了什么，你说我做了个框架，把vue react angular优点都结合了一遍亲戚们懵逼了，你还在心里默默嘲笑他们，笑他们不懂你的轮子，不懂你的算法不懂你的封装，也笑他们连个复杂点的密码都记不住。

你父母的同事都在说自己的子女年的收获,儿子买了个房，女儿买了个车，姑娘升职加薪了，你的父母默默无言，说我的儿子搞了个破电脑开起来噏噏响家里电表走得越来越快了，你的父母还在想你什么时候能买套房子什么时候能成个家你却一天到晚想的是怎么封装一个牛逼的组件，你的和有钱人的差距就是你的格局一直在于代码，而你的身边的人会想怎么挣钱，你一天到晚看那个破文档封装什么UI组件，什么switch button avtar日历组件github早就一堆但是你还是乐此不彼的写着自己的另外一套因为你会觉得这是你自己写的不一样实际上毛的用处都没有时间轮回一年又一年你还在想着新技术出来了继续学习什么 vite,什么webpack5而你身边的人在考虑啥时候买第二套房子什么时候生二胎，你还在捣鼓你的破代码
:::

虽然很荒唐，但格外真实，在业务中一个会造轮子和一个会用轮子 两个程序员实际产出是一样的。

你可能会说，我自己写的轮子，出了问题我能快速响应解决问题

这种情况确实可能，你写的轮子自己用的爽，在别人眼里可能就是个垃圾，等你离职后后面来的人根本看不懂就直接重构了，值不仅浪费自己时间，还会浪费下一个人的时间。

而一个好的轮子需要经过大量业务和开发者的考验。需要作者有极深厚的功底和付出大量的时间精力。

当然这里也不是说大家都不再写库了，只是说再开发时间紧迫的时候，那么有没有一些简单又好用的库呢？

当然有，下面让我来介绍最近常使用的react库，可以解决绝大多数业务中遇到的问题



## WEB端 UI框架库


### 1.  [ant.design](https://ant.design/docs/react/introduce-cn)

> ant.design 不用我多说了，如果说以后的开发生涯中，我只能选择一款UI框架库，那我就选antd ,无论从功能覆盖面 、 样式美观度 、 中文文档都是无可挑剔。

### 2. [MUI](https://mui.com/zh/getting-started/supported-platforms/)
> 如果对`antd`产生了审美疲劳，不妨试试这款国外的ui框架 ，有着完全不同的视觉风格 , 我个人觉得


### 3. [arco.design](https://arco.design/)

> 最近由字节跳动开源的`arco.design`一口气推出了`vue`和`react`版本 <br>
> 尽管他的风格和api都和`antd`十分相似，但`arco`更年轻一些，不妨一试。

> 虽然`arco`可能借鉴于`antd`，但凭借着字节开发团队的势力，谁能走得更远犹未可知。 





## 移动端UI框架

### [Ant Design Mobile](https://mobile.ant.design/zh)
旧版本的antd 移动版并不好用，但更新到v5以后还是值得一试

### [zarm](https://zarm.gitee.io/#/components/icon)
我自己还没用试过这个框架，但从示例来看还是挺不错的


## 其他

### [ahooks](https://ahooks.js.org/)
ahooks有着非常多精巧的钩子和TS提示 ，其中的`useRequest`是我开发中经常使用到的，非常好用


### [react-dnd](https://react-dnd.github.io/react-dnd/about)
react-dnd是一个支持dom拖拽的库

### [React Slick](https://react-slick.neostack.com/)
Slick 是一个轮播图的组件库

### [react-hot-toast](https://github.com/timolins/react-hot-toast)
`react-hot-toast`是一款小巧的提示框组件
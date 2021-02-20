---
title: 手写bind
date: 2021-02-20
tags:
 - 前端
 - js
categories: code
---


[参考文档地址](https://github.com/mqyqingfeng/Blog/issues/12)

## 一句话解释bind

:::tip
bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
:::

所以我们需要实现的功能有:

1. 返回一个函数
2. 可以传入参数
3. 第一个参数是返回函数的this指向
4. 2-n个的参数是返回函数的实际参数

## 模拟改变this

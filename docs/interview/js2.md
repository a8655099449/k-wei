---
title: 面试问题收集 - js篇 - 02
date: 2021-04-29
tags:
 - 前端
 - 面试
 - js
categories: interview
---


## let \ var \ const 的区别

let 和 const是es6引入的新的声明关键字， 和var的区别主要在于拥有了块级作用域（就是一个大括号的作用域），而且无法重复声明。

let和const两者间区别在于const是常量，声明后无法重新赋值。

## promise的作用

主要就是解决异步嵌套问题

## 改变this的方式？

call 、 bind 、 apply 

**他们的区别是什么？**

call和apply的区别在于apply第二个参数是数组。

bind和上面两者的区别是不会调用函数，而是返回一个新的函数

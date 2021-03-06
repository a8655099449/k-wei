---
title: js的严格模式
date: 2020-11-12
tags:
 - js
 - 前端
categories: code
---


## 严格模式
### 什么是严格模式
- JavaScript除了正常模式外，还提供了严格模式。严格模式是具有限制JavaScript变体的一种方式。
- 严格模式在ie10以上版本的浏览器才会被支持

### 严格模式的作用
- 消除了JavaScript语法的一些 不合理，不严谨的之处，减少了一些怪异行为
- 消除了代码运行的一些不安全之处
- 提高编译器效率，增加运行速度
- 禁用了在ECMAScript的未来版本一些可能被定义的语法，为新版本的JavaScript做好铺垫，不如class ，enum ， export

### 开启严格模式
- 为脚本开启严格模式

```
# 在所有的语句之前，放上特定语句 'use strict'
```

- 为函数单独开启严格模式

```
# 在函数的开头 加上 'use strict'
```
### 严格模式的变化
- 变量规定
>1.不能使用未声明的变量，造成模式下，一个变量没有声明，就赋值，默认是全局，而严格模式下，这种情况就会报错
2.严格模式无法使用 delete 删除已声明的变量

- this的指向 
> 全局作用域的this不再指向window 而是undefined
> 定时器的this指向还是window

- 函数的变化
> 1.不允许函数重名
> 2.不允许再非函数块中声明函数，比如在if 或者for中
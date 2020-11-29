---
title: 箭头函数详解
date: 2020-11-16
tags:
 - js
 - 前端
categories: code
---

## es6 的箭头函数

:::tip
剪头函数属于 es6 对于 js 的一种语法糖
:::

- 定义一个最简单的箭头函数

```javascript
const fn = (param1, param1) => {
  /* code */
};

// 等价于

const fu = function(param1, param1) {
  /* code */
};
```

## 箭头函数的简写

> 如何将代码做到极致的优雅?

```javascript
// 正常写法
const sum = (a, b) => {
  return a + b;
};
// 剪头函数中,当有且只有一个参数时,参数的括号可以省略
const power = (n) => {
  return n * n;
};

// 当函数内有且只有一行代码时 省略大括号和return

const mul = (a, b) => a * b;

// 当你返回的值是一个函数，你也可以这样写

const fn = () => new Promise((resolve, reject) => {});
```

## 箭头函数中的 this 指向

::: warning
箭头函数和传统 function 语法，最大的区别在于 this 指向不同
<br>
箭头函数的 this 永远指向上下文,无法进行修改
<br>
让我们通过下面这几个例子来对比

- 在构造函数中

```js
class Fn {
  constructor() {
    this.btn = document.querySelector(".btn");
    this.btn.addEventListener("click", this.fun1);
    this.btn.addEventListener("click", this.fun2);
  }
  fun1 = () => {
    console.log(this);
    // 依然指向Fn这个构造对象
  };
  fun2 = function() {
    console.log(this);
    // 因为我们把fun2这个函数绑定给了按钮,所以指向变成了btn的dom对象
  };
}
new Fn();
```

- 在普通的对象中

```js
const obj = {
  name: "张三",
  active() {
    setTimeout(() => {
      console.log(this);
      //  指向obj这个对象
    }, 1000);
    setTimeout(function() {
      //  指向window
    }, 1000);
  },
};
```

:::

### 箭头函数与传统函数的其他区别

#### 箭头函数无法当构造函数使用

> 这个很容易理解，因为箭头函数 this 的特别，所以他无法当做构造函数使用

#### 箭头函数无法在使用`arguments`关键字

> 传统函数可以使用`arguments`来获得传入的所有参数数组，箭头函数使用`arguments`会出现未定义的报错

```js
const fn1 = (...prams) => {
  console.log(prams);
  // 输出 [1,2,3,4]
};
fn1(1, 2, 3, 4);

// 当然，其实传统函数也能用这种方式
```

#### 箭头函数没有原型链

```js
const fn1 = () => {};
const fn2 = function() {
  console.log(this);
};
console.log(fn1.prototype); // undefined
console.log(fn2.prototype); // constructor

```
![alt]()
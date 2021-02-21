---
title: 手写bind
date: 2021-02-20
tags:
 - 前端
 - js
 - 手写系列
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

```js

Function.prototype.bind2 = function (context) {
  let self = this;
  return function () {
    return self.apply(context);
  };
};
let obj = {
  name: "张三",
};

function fun1() {
  console.log('====================================');
  console.log(this.name); // 输出张三
  console.log('====================================');
}
let fun2 = fun1.bind2(obj)
fun2()

```

:::warning
在上面我们改变`this`的指向使用了`apply`，使用`call`也可以，`apply`更利与后面我们实现传递参数

关于apply和call的实现

[手写apply和call(暂时还不存在该文章)](#)
:::


## 模拟参数传递的实现

bind的2-n个参数才是执行函数的实际参数，这里我们的思路是，首先使用`arguments`获得参数数组，使用`splice`删除第一个，其他的组成一个数组利用`apply`第二个参数的特效来实现

```js

Function.prototype.bind2 = function () {
  if (arguments.length === 0) return console.error('你必须传递第一个参数')  
  let context = Array.prototype.splice.call(arguments, 0, 1)[0];
  let agrs = arguments;
  let self = this;

  return function () {
    return self.apply(context, agrs);
  };
};
let obj = {
  name: "张三",
};

function fun1(prams1, prams2, prams3) {
  console.log("====================================");
  console.log(this.name, prams1, prams2, prams3); // 输出张三 ,1 ,2 ,3
  console.log("====================================");
}
let fun2 = fun1.bind2(obj, 1, 2, 3);
fun2();


```

## 构造函数效果的实现


```js
Function.prototype.bind2 = function () {
  if (arguments.length === 0) return console.error("你必须传递第一个参数");
  let context = Array.prototype.splice.call(arguments, 0, 1)[0];
  let args = arguments;
  let self = this;

  let fBound =  function () {

    return self.apply(this instanceof fBound ? this : context, args);
  };
  fBound.prototype = this.prototype;
  return fBound;
};
let obj = {
  name: "张三",
};

function Person(name, age) {
  console.log("====================================");
  console.log(this.name); // 输出undefined
  console.log("====================================");
  this.name = name;
  this.age = age;
  console.log('====================================');
  console.log(this.name); // 输出 王五
  console.log(this.age); // 输出 18
  console.log('====================================');
}

Person.prototype.friend = "李四";

let fun2 = Person.bind2(obj,'王五',18);
let zs = new fun2();

console.log('====================================');
console.log(zs);  // 输出 {name:'王五',age:18}
console.log('====================================');

```


:::tip
这段我自己也没有整的太明白，这里面看代码的原理是使用`instanceof`判断是否属于构造函数，然后改变了原型链

主要是我自己对于构造函数和js的基础还不够牢固，之后如果理解再进行更新
:::
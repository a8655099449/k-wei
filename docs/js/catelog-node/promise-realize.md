---
title: 手写promise
date: 2021-02-21
tags:
 - 前端
 - js
 - 手写系列
categories: code
---

## 分析功能1.0

我们来看看下面这个正常promise的使用

```js

let fun1 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行回调');
    resolve()
  }, 1000);
});

let pro = fun1()
pro.then(res=>{
  console.log('回调返回函数');
})
```

得出结论

1. Promise实例接受的参数是一个函数 且这个函数的两个参数`resolve` 和 `reject` 都是可执行的函数,这属于**固定写法**
```js
let promiseParms = (resolve, reject) => {}
new Promise(promiseParms);
```
2. promise返还的实例具有`then`属性，是一个函数，函数参数是一个callback
3. Promise具有三种状态,分别是`pending(等待中)` \ `resolved(成功)` \ `rejected(失败)`

我们初步实现大概就是这个样子
```js
class Promise {
  stateList = {
    pending: "pending",
    resolved: "resolved",
    rejected: "rejected",
  };
  state = this.stateList.pending; // 默认是等待中

  constructor(executor) {

    let resolve = () => {};
    let reject = () => {};

    executor(resolve, reject);
  }
  then(callback) {
    console.log('我是.then属性');
    callback()
  }
}

let test1 = () => new Promise((resolve,reject)=>{

});

test1().then(()=>{
  console.log('回调函数执行');

})
```


## 分析2.0


首先贴上第二版的代码
```js
class Promise {
  stateList = {
    pending: "pending",
    resolved: "resolved",
    rejected: "rejected",
  };
  state = this.stateList.pending; // 默认是等待中

  fulfillList  =[]  // 成功回调函数数组

  constructor(executor) {
    this.resolvedValue = undefined; // 用于存储成功回调函数参数
    this.rejectValue = undefined; // 用于存储失败回调函数参数

    let resolve = (...args) => {
      if (this.state !== this.stateList.pending) return;

      this.resolvedValue = args;
      this.state = this.stateList.resolved;
      // 将所有的还在等待执行的函数全部执行
      this.fulfillList.forEach(fn => fn(...args))

    };
    let reject = (...args) => {
      this.rejectValue = args;
      if (this.state !== this.stateList.pending) return;
      this.state = this.stateList.rejected;
    };
    executor(resolve, reject);
  }
  then(onfulfilled) {
    // 如果状态已经是成功的，那么我们直接调用函数
    if (this.state === this.stateList.resolved) {
      return onfulfilled(...this.resolvedValue);1
    }
    // 如果还在等待中，那么我们就这个函数放到一个数组中，
    // 等到合适的时机再调用，也就是构造函数的`resolve` 函数触发时
    if (this.state === this.stateList.pending) {
      this.fulfillList.push(onfulfilled)
    }
  }
}

let test1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0) {
        resolve("成功的参数");
      } else {
        reject("失败的参数");
      }
    }, 1000);
  });

test1().then((res) => {
  console.log(`回调结束，返回的参数是: ${res}`);
});

```

第二版中我们解决了以下的问题，可以说它已经很接近Promise了



1. then的callback肯定不是像上面那样直接执行，那么他的执行时机应该时什么时候？

执行的时机肯定时当状态等于`已成功`的时候，如果状态还在`等待中`的话，那么我们应该使用一个数组将这个函数装起来，等到成功时一并调用

2. callback的参数应该解决？

callback的参数源自于`constructor`中`resolve`的参数，在那边使用一个变量存储起来，方便我们此时传递

3. `constructor` 中 `resolve`和 `reject` 的作用？
   - 改变Promise的状态
   - 记录传递的参数
   - 执行在等待中的回调函数 

`.catch`原理很相似，大家可以自己实验一下，由于目前我们的函数还不支持链式调用，所以还不能像这样写 在第三版中我们将支持链式调用

```js
test1.then().catch() // 暂不支持
```







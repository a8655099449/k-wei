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

1. Promise实例接受的是一个函数 且这个函数的两个参数`reslove` 和 `reject` 都是可执行的函数,这属于**固定写法**
```js
let promiseParms = (resolve, reject) => {}
new Promise(promiseParms);
```
2. promise 实例返回的是一个函数
3. 执行promise函数后，返回的拥有`then`属性，且也是一个函数，参数是一个`callback`回调函数

直接开干





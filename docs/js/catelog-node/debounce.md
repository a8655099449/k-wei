---
title: 节流与防抖
date: 2020-11-23
tags:
 - js
 - 前端
 - 小技巧
categories: code
---

## 节流函数 (写法)
```javascript
// 节流函数
const throttle = (fn, time) => {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  }
}
```
:::tip 思路
设置一个定时器来执行函数，当定时器在执行时，如果该函数重复触发不会执行，只有在定时器执行完毕，才会执行新的函数
:::



## 防抖函数 (写法)

```JavaScript
// 防抖函数 
const debounce = (fn, time) => {
  let timeout = null;
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  }
};
```


:::tip 思路
以上代码是设定一个固定时间的定时器来你想要执行的代码 <br> 
当特定的时间出现重复触发时，则清除上一个定时器，设置一个新的 <br>
直到没有重复触发时，开始执行函数
:::

## 使用演示
> 两者的使用方法一致，只是执行出来的效果不一样

```js
let testFn = (pram) =>{
  console.log('我是要执行的函数',pram);
}

let debounceFn = debounce(testFn,1000)
let throttleFn = debounce(testFn,1000)

// 短时间内分别调用三次 
debounceFn('debounceFn1')
debounceFn('debounceFn2')
debounceFn('debounceFn3')

throttleFn('throttleFn3')
throttleFn('throttleFn3')
throttleFn('throttleFn3')


// 两者都只会执行一次
```

## 两者的区别


1. 如果测试了上面的`使用演示`则会发现, 节流函数触发的是第一次的调用，防抖函数触发的是最后一次的调用 
2. 如果我们设置一个 `500` ms的重复定时器去触发演示的函数，你会发现，节流函数会稳定的触发，而防抖函数则永远不会触发，这其中的区别很好的解释了这两者的使用场景
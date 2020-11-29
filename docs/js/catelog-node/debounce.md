---
title: 节流与防抖
date: 2020-11-23
tags:
 - js
 - 前端
categories: code
---

## 节流函数
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

## 防抖函数

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
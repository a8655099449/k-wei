---
title: vue中常用的自定义指令(持续更新中)
date: 2021-03-03
tags:
 - 前端
categories: code
pic: //image.woai996.com/picGo/20210303223237.png
desc: 
---


在阅读本文前，最好在先看下vue对这部分的官方文档，文档中的细节非常多。

[vue自定义指令官方文档链接](https://cn.vuejs.org/v2/guide/custom-directive.html)

在以下的代码展示中，我会将每个指令放在一个js文件内，然后导出，由统一的入口注册到Vue全局。

比如下面这个例子

```js
// src/directives/focus.js
const focus = {
  inserted(el) {
    el.focus();
  }
};
export default focus;
```
```js
// src/directives/index.js
import Vue from "vue";
import focus from "./focus";

const directive = {
  focus,
};
// 自动去注册指令
for (const key in directive) {
  Vue.directive(key, directive[key]);
}
```


## v-copy （一键复制）
日常开发中，**一键复制**这个需求十分常见，我们可以使用指令来对这个功能进行封装

:::details 具体实现的代码

```js 
// path : src/directives/copy.js

const copy = {
  inserted(el) {
    el.handler = () => {
      let  value = el.dataset.copytext;
      // 动态创建 textarea 标签
      const textarea = document.createElement("textarea");
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = "readonly";
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        console.log("复制成功"); // 可根据项目UI仔细设计
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener("click", el.handler);
  },
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};

export default copy;
```
**使用代码**

```vue
<button v-copy :data-copyText="copyText">
  复制
</button>
```
:::

:::tip 实现的思路
1. 使用 `v-copy` 指令给元素上面注册一个点击事件
2. 当点击时去获取 `data-copyText` 的值，这样我们就获得了复制的文本，
>（之所以没有通过`v-copy="copyText"`）这种方式传参是因为这种写法不支持双向绑定。所以用dataset共享参数更合适一些
3. 创建一个 `textarea` 元素
4. 将复制的文本赋值给`textarea`，
5. 将`textarea`选中
6. 执行`document.execCommand`指令  [document.execCommand函数说明](https://www.w3cschool.cn/javascript/javascript-execcommand.html)
7. 删除`textarea`元素
:::


## v-debounce (防抖指令)

> 需求 ： 避免用户连续点击多次触发重复的函数。 并且判断元素，如果是表单元素，改为按键事件


:::details 查看实现的代码

```js
const debounce = {
  bind(el, { value, arg }) {
    let callback = value;
    let timer;
    if (!arg) arg = 1000;  // 默认参数为 1s
    el.handler = () => {
      if (!timer) {
        callback();
        timer = setTimeout(() => {
          timer = undefined;
          // callback()
        }, parseInt(arg));
      }
      // el.
    };
    let handleKey = "click";
    let inptTags = ["TEXTAREA", "INPUT"];
    if (inptTags.indexOf(el.tagName) !== -1) {
      handleKey = "keyup";
    }
    el.addEventListener(handleKey, el.handler);
  },
  unbind(el) {
    let handleKey = "click";
    let inptTags = ["TEXTAREA", "INPUT"];
    if (inptTags.indexOf(el.tagName) !== -1) {
      handleKey = "keyup";
    }
    el.removeEventListener(handleKey, el.handler);
  },
};
export default debounce;

```

**使用**
```vue
<template>
  <div class="test3">
    <button v-debounce:500="handleDebounce">
      debounce
    </button>
    <input v-debounce:3000="handleDebounce" > 
    <textarea v-debounce="handleDebounce" /> 
  </div>
</template>

<script>
  export default {
    methods: {
      handleDebounce(){
        console.log('我是执行的函数');
      }
    }
  }
</script>

```
:::

:::tip 思路
这个指令的代码很简单，基本上看就可以看明白了

主要是有这样的意识，可以为我们开发中节省不少的功夫
:::
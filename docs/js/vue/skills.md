---
title: 使用vue的一些技巧
date: 2021-03-02
tags:
 - 前端
 - vue
 - 技巧
categories: code
pic: //image.woai996.com/picgo/20210302111854.png
desc: 
---

有一段时间不写vue，发现很多东西都已经忘记了，本篇将记录vue的一些实用的小技巧，

在工作中绝对可以起到很大的帮助，我尝试使用最简单的语言进行表达。

由于我对vue3的使用经验不足，所以以下的方法主要针对于vue2.x

大多数的方法都可以在官方文档中找到，多去阅读vue全家桶的文档，每次都会有新的收获

## 动态加载路由

> 我们去设置路由是一件比较重复的事情，而且当你的页面非常复杂时，路由配置就会显得臃肿不堪 <br>
> 其实我们只要遵循一定的规则，就可以让webpack动态的帮我们去加载路由，
让我们在`router.js`内写以下的代码
```js
// src/router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.获取路由信息
// 动态加载pages中所有的路由文件
const files = require.context('@/pages', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/pages' + key.replace('.', ''));
  return page.default;
})

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router

```
写完以上的代码后，router.js就不需要再变动了，其实可以看出，1、3、4步都和以往我们设置的一模一样。唯一的区别在于第2步。 

第2步的作用是让webpack去匹配 `pages`里面的文件夹内的`router.js` ，然后动态的加载到路由当中。后续的事情就不用管了，这样我们的代码结构就十分清晰

而pages内router.js的具体代码如下，作用是导出单个路由对象，以后如果我们对路由有修改，也可以直接找到对应页面的`router.js`,代码也变的更加的优雅且更易维护

![alt](//image.woai996.com/picgo/20210302113132.png)

可能有人说，这不就脱裤子放屁，就换了个位置而已吗？似乎工作量并没有减少啊？

其实不然，这样做的好处有以下几点
1. 代码的优雅度和维护性变高了
2. pages内的`router.js` 其实是有律可循的，因为下面关键的几个值，就等于组件的名字而已，完全借助工具做这件事
>  有兴趣的可以了解一下这个库，我的思路也是源自于这个库 [跳转链接](https://www.npmjs.com/package/coderwhy)
  
![alt](//image.woai996.com/picgo/20210302114306.png)


## 自定义的v-model
> 如果常封装组件就知道，在vue中数据是单向流通的，所以不允许子组件修改父组件的数据，但有个例外就是 `自定义的v-model` ，常用于自定义组件的表单中。 

[官方文档说明](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

父组件

```js
<Test1 v-model="isShow" />
```

子组件
```vue
<template>
  <div class="test1">
    <input type="checkbox" :checked="isShow" @change="$emit('change',$event.target.checked)" >
  </div>
</template>

<script>
// ! 自定义 v-model
export default {
  name: "v-model-test",
  model:{
    prop:'isShow',
    event:'change'
  },
  props: {
    isShow:Boolean
  }
};
</script>
```
非表单也能定义，看业务的需求，以下是个非表单`v-model`的例子，父组件的代码没有变动，只有子组件变化了，我个人认为非常适用于带关闭按钮的弹窗

:::details 非表单，子组件代码
```vue
<template>
  <div class="test1">
    <button @click="handleShow">{{ isShow ? "显示" : "隐藏" }}</button>
  </div>
</template>

<script>
// ! 自定义 v-model
export default {
  name: "v-model-test",
  data() {
    return {
      message: "v-model-test",
    };
  },
  model: {
    prop: "isShow",
    event: "handleShow",
  },
  methods: {
    handleShow() {
      this.$emit("handleShow",!this.isShow)
    },
  },
  props: {
    isShow: Boolean,
  },
};
</script>
```
:::

## mixin
[mixin文档](https://cn.vuejs.org/v2/guide/mixins.html)

mixin的主要解决的是代码复用性，举个例子，A组件和B组件都需要一个同样的`data`或`method`，如果写两份代码就不优雅了，完全可以使用mixin来解决这个问题

以下是个简单的使用例子，建议使用将mixin都放在`src/mixins`文件夹下单独管理起来



```js
// src/mixins/index.js
export const mixinA= {
  data() {
    return {
      a: 'a'
    }
  },
  created(){
    console.log('====================================');
    console.log('mixin : A');
    console.log('====================================');
    return
  },
}
export const mixinB= {
  data() {
    return {
      b: 'b'
    }
  },
  created(){
    console.log('====================================');
    console.log('mixin : B');
    console.log('====================================');
    return
  },
}
export const mixinC = {
  data() {
    return {
      c: 'c'
    }
  },
  created(){
    console.log('====================================');
    console.log('mixin : C');
    console.log('====================================');
    return
  },
}
```
在组件中使用

```js
import { mixinA, mixinB, mixinC } from "../mixins";

export default {
  name: "mixin-test",
  mixins: [mixinC, mixinB, mixinA],
  created() {
    console.log("我自己的构造函数",this.a,this.b,this.c);
  },
};
```

## 自定义指令

[自定义指令的文档传送门](https://cn.vuejs.org/v2/guide/custom-directive.html)

我们知道vue中自带了非常多好用的指令，这比起react来言无疑是vue开发者值得沾沾自喜的一大优势

同时vue中不仅有自带的指令，还支持开发者可以定义自己的指令，用好自定义指令无疑对开发效率是非常大的一个提升

让我们来看下面这个官网上最简单的自定义指令例子

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```
在上面的代码中，注释已经非常清晰了，这么强大的功能必须使用起来

关于vue中的自定义指令我后面会单独再出一篇文章记录我们日常开发中常用的自定义指令。 [我们日常开发中常使用的vue自定义指令](./directives.html)







---
title: 使用vite开发react的经验
date: 2021-07-09
tags:
 - 前端
 - react
 - 经验
categories: code
pic: 
desc: 
---

开发react目前有几种主流的脚手架，比如`create-react-app` 和 `umijs`


最近尤大开发的`vite`也支持react构建，而且速度要比传统脚手架构建和热更新的速度快上很多
## 创建项目

```shell
npm init @vitejs/app
```

然后选择react，其中可以选择`react` 或者 `react-ts`其实都没啥差别，后面都可以随时变化，选择后 进入目录

```shell
yarn
yarn dev
```
就可以启动项目了，vite中的react项目默认支持`jsx`和`tsx` , 和其他脚手架开发没啥区别


## css模块化

在平常的react项目中，通常使用`css-moudlue`来实现css的模块化，在vite中我们可以使用`vite-plugin-react-css-modules`来显现css的模块化

[github仓库地址](https://github.com/fchengjin/vite-plugin-react-css-module) 

1. 安装 `vite-plugin-react-css-modules` 
2. 在`vite.config.js` 添加配置

```js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactCssModule from "vite-plugin-react-css-modules";
const generateScopedName = "[name]__[local]___[hash:base64:5]";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactCssModule({
      generateScopedName,
      filetypes: {
        ".less": {
          syntax: "postcss-less",
        },
      },
    }),
    reactRefresh(),
  ],
  css: {
    modules: {
      generateScopedName,
    },
  },
});
```

3. 创建`test.module.less` 并进行导入

使用的时候就使用`styleName`代替`className`就可以实现css的模块化

```js
import React from 'react'
import './test.moudle.less'
export default function Test() {
  return (
    <div
      styleName="test" >
      测试文本
    </div>
  )
}
```
:::warning
但这并不是一个非常好的方案，只是我目前找到的一个，因为他使用的`styleName`是作者自己diy出来的一个属性，这样并不利于后续兼容其他的框架。而且我使用这个插件的时候，这个包发布时间不长，也没啥人用，可能会出现问题。

后续有其他的解决方案我再更新
:::


## mock数据

`mock` 也是我们开发中常用到的一种功能

也有开发者提供了这个插件

[中文文档](https://github.com/anncwb/vite-plugin-mock/blob/main/README.zh_CN.md)
1. 安装

```sh
yarn add morkjs
yarn add vite-plugin-mock -D
```

2. 更改`vite.config.js`中的配置

```js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    viteMockServe({
      // default
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    reactRefresh(),
  ]
}));
```

3. 创建mork的数据 `mork/test.ts`

```ts
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/test",
    method: "get",
    response(query) {
      return {
        code: 1,
        data: {
          name: "张三",
          age: 18,
        },
      };
    },
  },
] as MockMethod[];
```

4. 使用

```js
axios.get("/api/test?a=1&b=2").then((res) => {
  console.log(res);
});
```
---
title: 提升react开发效率神器 ， ahooks的使用
date: 2021-07-12
tags:
 - 前端
 - 工具
 - react
categories: code
pic: https://ahooks.js.org/logo.svg
desc: 
---

在`hooks` 成为react开发的主流方式同时，不同的hooks库也应运而生，大家似乎都在探索hooks的最佳开发方式。

ahooks是阿里开源的一个hooks库，前身是umi hooks，这篇文章将介绍我使用`ahooks`的一些经验，学习她的设计模式和源码，将对我们开发react的理解和技巧有着莫大的提升

[中文文档地址](https://ahooks.js.org/zh-CN/) <br>
[github地址](https://github.com/alibaba/hooks)

## useRequest

`useRequest` 是一个网络请求的钩子，可能是整个库中使用的最多的一个方法。

1. 最简单的使用，`useRequest`的第一个参数是一个Promise的函数，它会返回`data` 和 `loading` 两个状态， 如果平常写法我们至少要`useState`两个状态，然后各种set，十分麻烦
```js
import { useRequest } from "ahooks";
import React from "react";

import { Spin } from "antd";

function App() {
  const { data, loading } = useRequest(getData);
  return (
    <Spin spinning={loading}>
      <h1>ahooks</h1>
      <div>{data?.age}</div>
    </Spin>
  );
}
const wait = (interval = 500) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });

const getData = async () => {
  await wait(1000);

  return {
    age: 18,
    name: "张三",
  };
};
export default App;
```


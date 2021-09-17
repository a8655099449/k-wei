---
title: 日常开发中常使用的js片段
date: 2021-09-17
tags:
 - 前端
 - js
categories: code
pic: 
desc: 
---


## 通过一个链接下载文件
```ts
export function download(link: string, name: string) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1);
  }
  let eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
```
示例: ``
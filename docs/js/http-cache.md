---
title: http 浏览器缓存
date: 2021-03-15
tags:
 - 前端
 - http
categories: code
pic: 
desc: 关于浏览器缓存的一些记载
---

## 什么是缓存？

浏览器缓存是指浏览器会将请求过的资源存储到本地磁盘中，下次再访问，优先从本地读取。

### 缓存的优点
1. 提高网站的响应速度
2. 减少服务器压力
3. 减少用户流量损耗

### 缓存的缺点
1. 更新不及时，用户看到的可能是老内容


## 缓存的流程

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b354e0a8cb2450aba81bc12e03d774e~tplv-k3u1fbpfcp-zoom-1.image?imageslim)


## 缓存的规则

缓存的规则分为两种 `强缓存`和`协议缓存`

### 强缓存

这种缓存是浏览器自动的缓存，判断缓存资源是否过期，如果没过期就使用缓存内容

如何判断是否是强缓存？且有没有过期？

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fef124c55304637bbf89591ea947131~tplv-k3u1fbpfcp-zoom-1.image)


在网络请求的`response headers `内找到` Cache-Control`的字段，一般`max-age = 31xxxxxxx` 这种就属于强缓存后面跟的value就属于缓存的秒数

Cache-Control  的属性说明

|   字段值   |  说明   |
| :----------: | ------------------------ |
|  `private`   | 仅浏览器可以缓存 |
|  `public`   | 浏览器和代理服务器都可以缓存 |



---
title: http 浏览器缓存
date: 2021-03-15
tags:
 - 前端
 - http
categories: code
pic: //image.woai996.com/picGo/20210316213753.png
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
|  `max-age=xxx`   | 过期时间（重要） |
|  `no-cache`   | 不进行强制缓存（重要） |
|  `no-store`   | 不强缓存，也不协商缓存，基本不用 |

规则可以同时存在多个

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c50fd6d7f97c41458a2b60cf8c2601af~tplv-k3u1fbpfcp-zoom-1.image)

对于强缓存，我们只要的研究对象是 `max-age` 和 `no-cache`

判断是否命中强缓存，主要看`response` 的 `Cache-Control` 字段值，如果有max-age=xxx秒，则命中强缓存。如果Cache-Control的值是no-cache，说明没命中强缓存，走协商缓存。

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07f8dcf612474aa3b35ebea794f06fbe~tplv-k3u1fbpfcp-zoom-1.image)


![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c27d01f81b746db9594013415232287~tplv-k3u1fbpfcp-zoom-1.image)


:::warning 注意
 `max-age = 0 ` 和 `no-cache` 的区别在于`no-cache`直接不进行强缓存，让你去走协商缓存，而`max-age=0`是进行强缓存，但是过期了，需要更新, 两者的效果实际是差不多的。
:::

## 协商缓存
协商缓存的触发条件

1. Cache-Control 的值为 no-cache （不强缓存）
2. max-age 过期了 （强缓存，但总有过期的时候）

也就是说除了 `no-store` 以外 , 最后都还是要走协议缓存

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfd149d78c3e4e25a3d5ce6128bb65b1~tplv-k3u1fbpfcp-zoom-1.image)


在这个图中，虽然强缓存命中，但是也有 ETag 和 Last-Modified ，这两个就是协商缓存的相关规则。虽然之前的强缓存流程和他俩没关。。。

`ETag`：每个文件有一个，改动文件了就变了，可以看似md5

`Last-Modified`：文件的修改时间

我们可以根据这两个值来判断文件是否修改了，只需要在下一次请求将这两个值带上（但是名字变了ETag-->If-None-Match，Last-Modified-->If-Modified-Since ），服务端把你带过来的标识，资源目前的标识，进行对比，然后判断资源是否更改了。


![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58e4541b60f44ff7ac7e9cf6c1242ba0~tplv-k3u1fbpfcp-zoom-1.image)

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77ece84bcd294d22bdc966362248663e~tplv-k3u1fbpfcp-zoom-1.image)


## 缓存命中显示

1. 从服务器获取新的资源

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/402c62c9bc2d46d485c43abe6205a23f~tplv-k3u1fbpfcp-zoom-1.image)

2. 命中强缓存且没过期，直接读取本地
   
![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27976c4bcca3415abaca5c85a862afe4~tplv-k3u1fbpfcp-zoom-1.image)

3. 命中协商缓存，且资源未更改，读取本地缓存


![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a9096f25e1846dbac0d7203825ff9ff~tplv-k3u1fbpfcp-zoom-1.image)

## 配置缓存的规则

可以在后端配置，也可以在`nginx`中配置

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/090c3c7058614a788ef3af402de9016c~tplv-k3u1fbpfcp-zoom-1.image)


## 用户行为对于缓存的影响

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df4081f9d78a424782119e8fb31d8fd9~tplv-k3u1fbpfcp-zoom-1.image)



## 强缓存与协商缓存的区别可以用下表来表示：

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a05986cd9044b878a4148252c46bcd0~tplv-k3u1fbpfcp-zoom-1.image)


## 总结

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c819577cba3746ddaa2e25a58bed84a4~tplv-k3u1fbpfcp-zoom-1.image)

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/244a7d5cf07f421ba9d4e3dbb4a27bf4~tplv-k3u1fbpfcp-zoom-1.image)

参考链接

[浏览器缓存(掘金)](https://juejin.cn/post/6844903763665240072#heading-4)

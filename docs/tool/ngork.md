---
title: 内网穿透的使用
date: 2021-06-22
tags:
 - 工具
categories: code
pic: 
desc: 
---
## 什么是内网穿透

内网穿透的意思是在我本地开启一个服务，比如`127.0.0.1:8080`启动了一个网页，目前这个项目当然是只有我这台电脑可以看到

而内网穿透做的事就是将这个端口映射到网外，这样我们在外网也能进行访问。

这个功能在开发中帮助很大，适用于`演示代码` 、 `微信开发接口回调`  等等一系列功能 

以下会介绍几款工具的使用，从免费到非免费，还有自己搭建的。非常简单


## 前置准备

启动本地服务器，比如vue或者react的项目 ，最简单的使用`vscode` 的`live server`插件就能启动一个服务器

## [ngrok](http://ngrok.cc/)

:::tip 特点
免费、可自定义域名、使用简单
:::

1. 前往官网注册账号
2. 登录账号进入管理页面
3. 购买隧道 （选择免费的、或者收费的都行），这里面可以配置需要穿透的端口 ， 域名无法修改，谨慎填写
4. 获得隧道id将其复制

![alt](//image.woai996.com/picGo/20210622220003.png)
5. 下载客户端 [下载地址 在管理页面也有](http://ngrok.cc/download.html)
6. 前往客户端目标文件输入以下命令进行启动，当出现下面的界面时代表成功
```sh
.\sunny.exe clientid [隧道id]
```
![alt](//image.woai996.com/picGo/20210622220511.png)

这时候我们在本地修改的东西访问对应的域名也能看到，但也有他的局限存在，就是可能出现访问速度太慢的问题，可以尝试用付费的来试试


## [小米球](http://ngrok.ciqiuwl.cn/)

小米球是一个个人开发的网站，如果上面那个穿透速度太慢可以试试这个

使用步骤

1. 注册账号，登录后台
2. 获得token


## [钉钉穿透](https://developers.dingtalk.com/document/resourcedownload/http-intranet-penetration?pnamespace=app)

:::tip 特点
钉钉穿透是钉钉提供给钉钉开发者使用，是我觉得三款工具内最好使得一款。 `自定义域名 、 免费 、 无需注册 、速度快` 
:::

1. 下载项目 `git clone https://github.com/open-dingtalk/pierced.git`
2. cd 到对应的目录进行启动 就ok了
```sh
ding -config=ding.cfg -subdomain=[自定义的域名] 8080
```
![alt](//image.woai996.com/picGo/20210622224709.png)


:::warning
使用powerShell 运行命令时，出现了无法运行的现象，建议使用 windows自带的 `cmd` 来执行 
:::





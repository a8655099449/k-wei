---
title: flutter的安卓运行环境搭建
date: 2021-01-21
tags:
 - 前端
 - flutter-基础
 - Dart
categories: code
pic : '//image.woai996.com/picGo/20210119201649.png'
---

## flutter的特点

- 跨平台
- 高性能

阿里的闲鱼就是使用flutter开发

[github地址](https://github.com/flutter/flutter)

但由于flutter还是一款年轻的框架，也具备了学习成本较高和社区不完善的缺点

## 在windows搭建flutter的运行环境

[中文文档地址](https://flutter.cn/docs/get-started/install/windows)

### 1. 安装 java的JDK
1. 下载jdk [下载地址](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
> 这里使用的是jdk8 我之前下载的是jdk15 结果到后面配置的时候出现报错

![alt](//photo.tuituisoft.com/picgo/20210121172259.png)


1. 安装JDK,直接双击安装包一路点击下一步就🆗了

2. 配置环境变量,以下操作以win10为例



![alt](//photo.tuituisoft.com/picgo/20210121173152.png)

如下图操作 新建一个`JAVA_HOME`的系统变量

![alt](//photo.tuituisoft.com/picgo/20210121173641.png)

在Path中添加 `%JAVA_HOME%\bin` 和 `%JAVA_HOME%\jre\bin` 变量
![alt](//photo.tuituisoft.com/picgo/20210121174044.png)

4. 验证是否配置成功
在终端中输入`java` 和`javac`,看看是否出现以下的信息

![alt](//photo.tuituisoft.com/picgo/20210121174256.png)


### 2. 下载 Android Studio
1. [安装地址](https://developer.android.google.cn/studio)
2. 下载完成后，就一直点击下一步进行安装就可以了


### 3. 配置Flutter Sdk
1. [安装地址(国外地址)](https://flutter.dev/docs/development/tools/sdk/releases) [安装地址(国内地址)](https://flutter.cn/docs/development/tools/sdk/releases)

2. 将压缩包解压到你想要的安装的位置
3. 配置环境变量 , 如图所示，注意: 要找到 `bin`目录
![alt](//image.woai996.com/picGo/20210121211626.png)
4. 验证是否配置成功 , 出现以下提示则安装成功

![alt](//image.woai996.com/picGo/20210121212247.png)

### 4. 配置Flutter国内镜像[非必须]

搭建环境可讷讷个要下载很多的资源文件，因为网络的问题可能会出现下载不了的原因。我们可以将地址更换为国内的镜像，来提升下载的速度


在系统的环境变量中添加以下的便利
```Dart

FLUTTER_STORAGE_BASE_URL: https://storage.flutter-io.cn
PUB_HOSTED_URL: https://pub.flutter-io.cn
```

### 5. 运行`flutter doctor` 来检查是否配置成功


### 6. Android Studio 配置

![alt](//image.woai996.com/picGo/20210121223027.png)


## vscode中编写Flutter
> 在官方的文档中也有对于vscode编辑器的描写
1. 安装插件 `flutter` 和 `dart`

2. 点击`view` -> 点击`command palette`

![3](//photo.tuituisoft.com/picgo/20210122102445.png) 

3. 选择flutter new project 来创建一个新的项目

![alt](//photo.tuituisoft.com/picgo/20210122103003.png)

4. 创建完成后会是这样的一个文件夹 

![alt](//photo.tuituisoft.com/picgo/20210122103507.png)
5. 选择一台设备 输入 `flutter run ` 即可启动
:::tip
设备可以使用自己的安卓手机，或者开启电脑安卓模拟器

使用国产的模拟器也不失为一个选择
:::

![alt](//photo.tuituisoft.com/picgo/20210122103906.png)

6. 启动成功后会是这样的一个界面

![alt](//photo.tuituisoft.com/picgo/20210122104614.png)

1. 在终端中可以使用以下的一些命令
```language
r 重载
p 显示网格
o 切换ios
q 退出调试
```
---
title: picGo的使用
date: 2020-11-26

categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子

publish: false
---

# picGo的使用



## 为什么要使用PicGo
:::tip
picGo是一款将图片上传到图床的快捷工具
<br>
如果常使用markdown写文档你会发现,在markdown中上传图片是一件非常麻烦的事情,markdown中图片支持本地引入或者网络链接,但这两种方式无疑都很繁琐
<br/>
<br/>
而picGo就是专门解决这个问题
<br/>
它的优点：

- 将剪切板的图片上传至图床,上传成功后,转换为图片链接,类似`![](https://i.loli.net/2020/11/26/KL3wSMHeDg4dCEJ.png)`,在markdown中直接黏贴就能使用
- 免费，简单易用
- 如果你使用它默认的图床，零配置上手即用
- 支持国内很多的图床,目前已支持 `腾讯云COS` | `GitHub图床` |`七牛` |`imgur` |`阿里云COS` | `又拍云图床` 
> 后面我会介绍我使用的主力`七牛云图床`
:::
 

## 适合人群
- markdown作者
- 前端开发者
- 个人开发者
- 已有图床，还在使用笨拙的方式上传图片

## 下载picgo [下载地址,点击前往](https://github.com/Molunerfinn/PicGo/releases)
> 我使用的是windows版本，下载那个以`.exe`结尾的包安装即可
<br/>

<a data-fancybox title="使用图示" href="http://image.woai996.com/picgo/20201126105906.png">![使用图示](http://image.woai996.com/picgo/20201126105906.png)</a>

## 使用效果
> 默认的图床上传速度较慢,优点是不需要配置，没有空间限制
<a data-fancybox title="picgo的使用" href="http://image.woai996.com/picgo/2020114232.gif">![picgo的使用](http://image.woai996.com/picgo/2020114232.gif)</a>

## 配置七牛云图床
> 如果你想要速度较快的图床,picgo也支持上传其他图床的使用，这里介绍的是七牛云图床的，**七牛云的优点在于，它提供给个人免费10g的使用空间，上传速度和图片的响应速度都是较快的**

### 配置步骤
- 注册七牛云账号,并进行实名认证,[注册地址](https://portal.qiniu.com/signup)
- 【登录控制台】 -> 【进入picgo的控制区域】
<a data-fancybox title="" href="http://image.woai996.com/picgo/20201126120043.png">![](http://image.woai996.com/picgo/20201126120043.png)</a>

::: warning

1. 测试域名只能使用一个月,超过一个月后只能使用自己已经备案的好的域名，所以建议一开始就建议准备好已经备案好的域名
2. 储存区域要根据自己的区域调整，例如`z2`对应的就是华南
3. `accesskey`和`secretkey`在个人中心获得
   
:::

## 最后
> vscode本身也有picgo或其他传图的插件，但我尝试总是出现这样那样的问题，这款插件不依赖其他的环境，使用起来简单，

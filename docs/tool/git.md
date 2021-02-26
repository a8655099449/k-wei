---
title: git的使用(备忘)
date: 2020-12-14
tags:
 - 工具
 - 经验
categories: code
---


## 更新推送地址

```sh
git remote set-url origin git-link
```

## 如何在`.gitignore`设置，单独打开某个文件夹上传
> 有时候我们要有这要的需求，禁止A文件夹中的全部文件上传，但要让A文件夹中的`A1`文件夹上传，在文件中输入以下内容
```gitignore
/A/* 
!/A/A1/
```
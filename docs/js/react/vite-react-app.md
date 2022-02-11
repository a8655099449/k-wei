---
title: 使用 arco + vite + ts 搭建react的后台
date: 2022-01-27
tags:
 - 前端
categories: code
pic: 
desc: 
---


[github地址](https://github.com/a8655099449/react-vite-admin)




## 开发这个后台的契机


虽然网上基于react的后台框架很多，但是使用vite作为脚手架的还是比较少，加上我十分喜欢vite，借着字节开源的UI框架[arco]。想自己来尝试搭建一个后台来试试



目前后台实现的功能有 ： 约定式路由 、 自动生成菜单栏 、 日间/夜间模式切换 、 更换主题颜色 、 权限控制 、 切换语言



除了react 和 vite 其他使用的库


|    功能    | 使用到的库         |
| :--------: | ------------------ |
|    路由    | `react-router-dom` |
|    ui库    | `arco`             |
| 颜色选择器 | `react-color`      |

十分精简，所有不必要的库都没有增加进来，并且全部使用ts开发


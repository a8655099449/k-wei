---
title: 我常用css的常用属性
date: 2020-11-18
tags:
 - css
 - 经验
categories: code
---



# 我使用css的常用属性
## 通用
```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

```


## 渐变色
```css
background: -webkit-linear-gradient(top, #299beb 0%, #1eaae4 100%);
```
## 使用定位实现居中
```css
  position      : fixed;
  left          : 50%;
  top           : 50%;
  transform     : translate(-50%, -50%);
```

## 文字一行超出显示`...`，宽度必须固定 
```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```
## 多行文字超出不显示，宽度必须固定

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; /*这个决定行数*/
overflow: hidden;
```

## 父容器的宽度由子元素决定，宽度超出不换行

```css
.parent{
  white-space: nowrap;
  display: inline-block;
}
.child {
  display: inline-block;
}
```


## 图片模糊效果

```css
filter          : blur(2px);
```

## 常用的box-shadow属性
```css
/* 纸片特效 */
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

```


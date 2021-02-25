---
title: 深入了解css的水平渐变[linear-gradient]属性
date: 2021-02-25
tags:
 - 前端
 - css
categories: code
pic: 
desc: 
---

## 从上到下渐变

> linear-gradient 可以指定两个颜色 从上到下进行渐变，这是最基础的使用方法

```css
.app{
  background: linear-gradient(#1ba160,#64c6fc);
}
```

![alt](//image.woai996.com/picgo/20210225154009.png)

我们可以通过在颜色后面增加`%`的方式控制颜色的比例

```css
.app1 {
  width: 200px;height: 200px;
  margin: 100px auto;
  background: linear-gradient(#1ba160 70% ,#64c6fc );
}
```
![alt](//image.woai996.com/picgo/20210225154729.png)

如果把颜色换成透明和黑色 那就可以实现一下的一种遮罩效果了，这种需求业务中可能遇到

![alt](//image.woai996.com/picgo/20210225155204.png)

```css
.app1 {
  width: 200px;height: 200px;
  margin: 100px auto;
  border: 1px solid #ccc;
  background: linear-gradient( transparent 70% ,#000 130%  );
}
```


## 多种颜色的渐变
配置多种颜色就能出现以下的效果

![alt](//image.woai996.com/picgo/20210225160011.png)
```css
.app1 {
  width: 200px;
  height: 200px;
  margin: 100px auto;
  border: 1px solid #ccc;
  background: linear-gradient(
    red ,
    orange ,
    yellow ,
    green ,
    cyan ,
    blue ,
    violet 
  );
}
```

![alt](//image.woai996.com/picgo/20210225161512.gif)

## 文字颜色渐进
通过设置` -webkit-background-clip` 属性

![alt](//image.woai996.com/picgo/20210225162138.png)

```css
.app1 {
  width: 400px;text-align: center;
  line-height: 200px;
  height: 200px;
  margin: 100px auto;
  color: transparent;
  background: linear-gradient(45deg, #228DFD 20%, #00CF00 40%, #F45749 80%);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 50px;
}
```

## 斑马条纹背景

我们可以设置以下的属性来获得有条纹背景效果

![alt](//image.woai996.com/picgo/20210225162753.png)

```css
.app1 {
  width: 400px;
  height: 225px;
  margin: 100px auto;
  border: 1px solid #000;
  color: transparent;
  background: linear-gradient( #000 50%, #fff 50%);
  background-size:100%  25px ;
}
```

控制好stop的比例也能实现三色条纹

```css
.app1 {
  width: 400px;
  height: 225px;
  margin: 100px auto;
  color: transparent;
  height: 100px;
  width: 300px;
  background: linear-gradient(#228DFD 33.33%, #00CF00 33.3%,#00CF00 66.66%, #F45749 0);
}
```

![alt](//image.woai996.com/picgo/20210225163309.png)

竖纹背景只需要旋转90°就可以了

![alt](//image.woai996.com/picgo/20210225163527.png)

```css
.app1 {
  width: 400px;
  height: 225px;
  margin: 100px auto;
  color: transparent;
  height: 100px;
  width: 300px;
  background: linear-gradient(90deg,#228DFD 33.33%, #00CF00 33.3%,#00CF00 66.66%, #F45749 0);
  background-size: 25px 100% ;
}
```

如果我们需要改变

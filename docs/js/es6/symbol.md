---
title: es6新类型 - Symbol
date: 2021-04-29
tags:
 - 前端
 - es6
categories: code
pic: 
desc: 
---

## symbol是什么？

symbol属于es6引入的一种新的原始类型，意味着独一无二的值，它出现的意义是为了解决对象中属性值可能重复的问题。

如果是以字符串的方式对对象进行赋值，可能导致属性重复而被覆盖，symbol的出现使对象有了一种不会被覆盖的属性定义方式。

## 定义一个symbol值

```js
let s1 = Symbol()
let s2 = Symbol('hello') // 参数可以是字符串，这可以让symbol值更有辨识度
let s3 = Symbol({   // 如果传入的不是一个字符串则会调用toString的方法
  toString(){
    return 'word'
  }
})
```
## 使用symbol当对象的属性名
必须要使用方括号的形式，如果是以`.`的方式会认定为字符串

```js
let mySymbol = Symbol('my')

let obj[mySymbol] = 'hhha' // 第一种方式

obj={
  [mySymbol] : 10   // 第二种方式
}

Object.defineProperty(obj,mySymbol,{ 
  value:'value'
})
```

## Symbol.for() \ Symbol.keyFor()

如果我们需要创建两个相同的`symbol`值可以用到`Symbol.for`这个api
```js
let a = Symbol.for('a')
let b = Symbol.for('a')

console.log(a === b); // true
```

`Symbol.keyFor()` 可以获得用`Symbol.for`定义的字符串

```js
let a = Symbol.for('a')
let b = Symbol('a')

console.log(Symbol.keyFor(a)); // a
console.log(Symbol.keyFor(b)); // undefined
```
## 使用symbol做单例模式


## symbol 的一些特点

1. 不能做运算
2. 不会重复
3. 作为对象key名不会被遍历出来，可以使用一个`Object.getOwnPropertySymbols(obj)`的api来获得
4. 可以被用作定义常量


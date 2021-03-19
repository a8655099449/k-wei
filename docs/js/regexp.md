---
title: 《JavaScript正则不完全指南》
date: 2021-03-12
tags:
  - 前端
categories: code
pic: //photo.tuituisoft.com/picgo/20210312113244.png
desc:
---

正则表达式 `RegExp = regular expression`的缩写

正则在我们的开发中非常常见，

如 vue 的模板编译，webpack 打包，无不是对正则的应用，如果将正则学习好，可以对开发起到非常大的帮助

是我认为在编程中性价比较高的技能

## 定义一个正则对象

1. 使用 `new` 实例化一个正则对象
   > 参数 1（匹配的内容） ： 字符串 <br>
   > 参数 2（修饰符） ： 字符串的 `igs`

igs 的实际含义
| 字符 | 含义 |
| ------------ | ------------ |
| i（ignore case） | 忽略大小写 |
| g（global） | 匹配全局（正则默认在匹配到第一个成功的对象后停止匹配，加上 global 后可以匹配所有的内容） |
| m（multi-line） | 匹配多行 |

```js
let reg = new RegExp("test", "igs");
```

1. 使用字面量方法定义

```js
let reg = /test/gis;
```

这两种方式，通常我们认为第二种更加的简洁明了

但是第二种定义中我们没法使用变量方法。假如我们需要匹配的内容并不是固定的，就需要使用第一种方法

```js
let t = "test";
let reg = /t/; // 不可行
let reg2 = new RegExp(t); //可行
```

## 正则中的表达式

### 1. `[]` 中括号

中括号在正则里面代表匹配一个区间，且每个中括号内只匹配一位字符

```js
let reg = /[abc][def]]/;
// 这个并不是匹配长度6位的字符  而是只匹配两个字符，这两个字符以abc开头 后面跟着def

reg.test("ac"); // false
reg.test("bd"); // true
reg.test("af"); // true
```

### 2. `-`字符

区间的写法可以是 `[0123456789]` <br>
也可以使用`-` 字符来代表一个区间 例如刚刚的语句我们就可以写成 `[0-9]` <br>
常见的区间还有 `[a-z]` 和 `A-Z` ,或者你想不区分大小写的字母`[A-z]` **注意这里我们把大写`A`放在前头，这个顺序是不能乱的**

:::warning
`-`字符的区间遵循着从小到大的规则，否则就会报错，比如你不能这样写 `/[9-0]/`
:::

还可以这样写 匹配 `0-3` 和`6-9` 中间的数字

```js
let reg = /[0-36-9]/;
```

## 量词

量词指的是我们可以根据某些规则，减少一些重复性字符的输入

比如匹配 n 个数值，或者限制长度

| 量词符 | 含义 | 示例 |
| :----: | ---- | ---- |
|   `+`    | 匹配一个或者多个   | `/n+/` (必须存在1个或者多个n)|
|   `*`    | 匹配0个或者多个   | `/n*/` (0个或者多个都能被匹配上)|
|   `?`    | 匹配0个或者1个   | `/n?/` (0个n或者1个n可以被匹配上)|
|   `{x}`    | 必须包含x个n   | `/n{3}/` (必须存在`3`个n,**`x`必须为整数 且不能存在空格**)|
|   `{x,y}`    | 必须包含`x 至 y`个n   | `/n{3,5}/` (必须存在`3 到 5`个n)|
|   `{x,}`    | 必须包含`x 至 正无穷`个n   | `/n{1,}/` 这个就等价于 `/n+/` |
|   `$`    |  以该字符结尾   | `/n$/` 匹配以n结尾的字符 |
|   `^`    |  以该字符开头   | `/^n/` 匹配以n开头的字符 |
|   `?=`    |  必须要紧随指定字符的字符串   | `/a?=n/` 匹配a后面紧随一个n的字符 |






<!-- ### `^` 字符

`^` 如果在方括号内意味取反

```js
let reg = /[^a]/  // 不能包含a
```
如果不是在方括号内，意味表示以什么开头，

```js
let reg = /^a/  // 匹配以a靠头的字符
```

### `+` 字符
 `+` 号代表一个或者多个
```js
let str = /\w+/ //代表必须要有一个数字，或者多个数字
```
### `*`字符
`*` 号代表0个或多个

### `$`字符
 -->

## 元字符

[元字符参考手册](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)

| 字符 | 含义                                            |
| :--: | ----------------------------------------------- |
|  \n  | 换行符                                          |
|  \r  | 回车符                                          |
|  \t  | 制表符（按下一个`tab`的距离）                   |
|  \w  | 字母 + 数字 + `_` 等价于 `[\w]` === `[0-9A-z_]` |
|  \W  | 等价于 `[^\w]`                                  |
|  \d  | 等价于 `[0-9]`                                  |
|  \D  | 等价于 `[^\d]`                                  |
|  \s  | 等价于 `[\r\n\t\v\f]` 以及空白符                |
|  \S  | 等价于 `[^\s]`                                  |
|  \b  | 匹配单词边界                                    |
|  \B  | 匹配非单词边界                                  |
|  .   | 任意非`换行符`或`结束符`的字符                  |

## 正则匹配的规则

### 不回头

匹配过的字符不会再重新匹配，比如以下这个例子

```js
let reg = /[abc][cef]/g;
let str = "acef";
str.match(reg);

// 在这个案例中，ac 和  ce 都符合正则匹配的要求
// 但是在这里只会匹配出 ac
```
### 贪婪模式

能匹配多就不匹配少
 
### 非贪婪模式 <br>
在正则中默认就是贪婪模式，如果像变成非贪婪模式，需要再原本的表达式后面加上`?`

```js
'hello world'.match(/.*/g)  // 在贪婪模式下 .* 会匹配所有的字符
'hello world'.match(/.*?/g)  // 加上问号后就变成非贪婪模式，只匹配少不匹配多
```





## js字符串内置方法

正则主要就是对于字符串的一些处理，所以了解js内置的字符串方法也有助于我们理解正则

### `toLowerCase` 和 `toUpperCase`
转换字符串为大写或者小写


### indexOf 
查询一个字符是否存在，如果存在返还改字符串出现的下表，没有出现返回`-1` 
```js
console.log('abca'.indexOf('a')); // 输出0
console.log('abca'.indexOf('a',1)); // 输出3
console.log('abca'.indexOf('d')); // 输出-1
```

### lastIndexOf
功能和indexOf类似，不过是从后往前找

### `substr` 和 `substring`
他们的区别主要如下

```js
substr(startindex[包含], length)
substring(startindex[包含], endindex)
```

```js

// 以下两组结果相同,是因为substring 在调用时,如果第一个参数大于第二个参数,会智能的调换位置
console.log('abca'.substring(1,2)); // b
console.log('abca'.substring(2,1)); // b
```

### `toString()` 和 `valueOf()`

toString 必定返还的是一个字符串

`valueOf` 返还的是一个原本的值

## `replace()`  字符串替换
> replace 绝对是字符串中重量级的函数，也是和正则合作的最好的函数。接下来我会在着重的介绍这个函数。

`replace`的第一个参数可以使用字符串，也可以使用一个正则对象，

第二个参数则是替换的内容


replace 默认没有全局匹配。只有在正则加上g的关键字后才可以有全局属性
```js
`testtest`.replace('t','a') // 将字符串第一个遇到的 t 更换为a
```
像以上的例子如果我们要把所有的t替换为a 用字符串就无法满足需求

我们可以这样写来完成需求

```js
`testtest`.replace(/t/g,'a') // 将字符串第一个遇到的 t 更换为a
```

### 练习1:  把中划线命名发改为驼峰命名
例如: `user-name-and-user-age  => userNameAndUserAge`
```js
let str = 'user-name-and-user-age'
let reg = /-(\w{)/g

str.replace(reg,($,$1)=>{
  console.log($,$1);
  return $1.toUpperCase()
})
```

### 练习2:  把`xxyy`改成`yyxxx`
运用到了反向引用和replace的函数特性
例如 `aabbccdd` => `bbaaddcc`
```js
let str = "aabbccdd";
let reg = /(\w)\1(\w)\2/g;

let res = str.replace(reg, ($, $1, $2) => {
  return $2 + $2 + $1 + $1;
});
console.log("最终结果", res);
```

### 练习3 : 将驼峰命名换成下划线命名

例如 `userNameAndUserAge => user_name_and_user_age`

```js
let str = "userNameAndUserAge";
let reg = /[A-Z]/g;
let res = str.replace(reg, ($) => {
  return `_`+$.toLowerCase();
});
console.log("最终结果", res);
```

### 练习4 : 将`xxyyzz` 替换为 `XxYyZz`
```js
let str = "xxyyzzeeffgg";
let reg = /(\w)\1/g;

let res = str.replace(reg, ($,$1) => {
  return `${$1.toUpperCase()}${$1}`
});
console.log("最终结果", res);
```
### 练习5 ：将`xxyyzz` 替换成 `x$y$z$` 且不能使用函数

```js
let str = "xxyyzz";
let reg = /(\w)\1/g;
let res = str.replace(reg, `$$$1`);
console.log("最终结果", res);
```
这里的知识点是，如果我们要使用的`$`符号，需要在`$`前面再加一个`$` 也就是`$$` 


### 练习6 : 字母去重  `aabbbcccsssssdddddd`  => `abcsd`
```js
let str = "aabbbcccsssssdddddd";
let reg = /(\w)\1*/g;
let res = str.replace(reg, `$1`);
console.log("最终结果", res);
```

### 练习7 ： 将数字从右到左，每三位加一个逗号 `99999999`=> `99,999,999`


这题其实就有点难度了,一开始我们可能想到的是这样

```js
let str = "99999999";
let reg = /(\d{3}\B)/g;  // 加/B是为了防止编辑出现加逗号的情况
let res = str.replace(reg, `$1,`);
console.log("最终结果", res); // 999,999,99
```
但以上的情况并不能满足从右到左的需求

如果我们要从左到右来匹配需要用到一下的正则

具体的意思是 ：结尾以三个数字结束且为非单词边界

```js
let str = "99999999";
let reg = /(?=(\B)(\d{3})+$)/g;
let res = str.replace(reg, `,`);
console.log("最终结果", res); // 输出 99,999,999
```

### 练习8 ： 模板匹配
```js
例如 `我叫{{name}}，我的年龄是{{age}}` => `我叫张三，我的年龄是18`  
```

```js
let str = `我叫{{name
}}，
我的年龄是{{age}}`;

let reg = /{{((.|\s)*?)}}/gm;
let res = str.replace(reg, function($,$1){
  $1 = $1.replace(/\s/g,'')
  return {
    name:'张三',
    age:18
  }[$1]
});

console.log("最终结果", res);
```

在以上我还做了一些处理，可以把换行出现的情况也考虑进去


### 练习9： 密码强度测试

1. 如果一个密码包含了多个条件 比如必须存在`大写字母` \ `小写字母` \ `数字` \ 长度6位以上。这种我们可以使用正向预查的方法来实现

```js
let reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&])/g;
console.log("最终结果", reg.test('Az1888%&'));
```


---
title: es6新类型 - Map和Set
date: 2021-04-29
tags:
 - 前端
 - js
categories: code
pic: 
desc: 
---


## Set

Map属于es6的一种新的数据类型，类似于没有重复值的数组

```js
new Set([1,2,1,3])  // {1,2,3}
```
可以使用Set来进行数组去重

```js
[...new Set(1,2,3,1,2,3)] // [1,2,3]
```

### 去重时的注意点
:::warning
Set比较重复时是进行严格等于 所以 `5` 和 `'5'` 会同时被添加进去，但`NaN` 和 `NaN` 会被视作一个NaN。 `{}` 和 `{}`  会被当成两个空对象添加进去
:::

```js
console.log([...new Set([5, '5'])]) // [ 5, '5' ]
console.log([...new Set([NaN, NaN])]) // [ NaN ]
console.log([...new Set([{}, {}])]) // [ {}, {} ]
```
### Set实例的属性和方法

|  name | 说明  |
| ------------ | ------------ |
|  constructor  |  返回构造函数 ，默认就是`Set`|
|   size |  返还成员总数 |
|   add(item) |  添加成员 ，返回set结构本身|
|   delete(item) |  删除成员 ，返回布尔值，表示是否删除成功 |
|   has(item) |  是否为Set成员 返回布尔值 |
|   clear() |  清除所有成员，没有返回值 |
|   keys() | 返回键名的遍历器 |
|   values() |   返回键值的遍历器 |
|   entries() |  返回键值对的遍历器 |
|   forEach() |  使用回调函数遍历每个成员 |

**因为Set没有键名所以`keys`和`values`的行为完全一致,`entries`的键名和键值完全相等**

**forEach和数组的forEach使用基本相同**

## weakSet
weakSet 和 set类似，也是成员不能重复的集合，它们的区别在于：

1. 成员只能是对象
2. 成员中的对象都是弱引用，即如果没有其他对象应用则会被垃圾回收机制回收，所以它很适合用来作为临时存储而不用担心内存泄漏，比如dom节点的存储
3. 不能变遍历，因为是弱引用所以无法保证它成员的遍历性


## Map

Map类似于数组，js中的数组只能使用字符串作为属性名，而Map可以接受其他类型的数据作为属性名

```js
let m = new Map()
let o = {name:'张三'}
m.set( o , 'content' )
m.get(o) // content
m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

也可以使用数组作为构造函数的参数 <br>
数组的参数必须是数组，里面的两个成员是键值对

```js
let m = new Map([
  ['a', 1]
  ['b', 2]
])
```

当键名产生重复时，后面赋值会覆盖前面的赋值

```js
let map = new Map();

map
.set(1, 'aaa')
.set(1, 'bbb');

map.get(1) // "bbb"
```
只有对同一个对象的引用，Map才会将其视为一个键
```js
let m = new Map()
m.set(['a'],1000)
m.get(['a'])  // undefined

let a = [0]
let b = [0]
m.set(a,1000).set(b,2000)
m.get(a) // 1000
m.get(b) // 2000
```
但如果是简单类型的（字符串、数字等...），只要其严格相等，就会视其为同一个键


## weakMap

weakMap只接受对象作为键名，且键名所指向的对象，不计入垃圾回收机制

weakMap的设计目的在于，键名指向的对象是弱引用，当对象被移除后，weakMap也会自动的移除对应的键值对，非常的节省性能，而且不用担心造成内存泄漏。

以下是个例子

```js
var wm = new WeakMap();
var element = document.querySelector(".element");

wm.set(element, "Original");
wm.get(element) // "Original"

element.parentNode.removeChild(element);
element = null;
wm.get(element) // undefined
```






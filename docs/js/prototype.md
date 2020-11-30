---
title: js的原型链和继承
date: 2020-11-03
tags:
 - js
 - 前端
categories: code
---

# 学习js的原型链和继承
## 1 构造函数中的原型链
### 1.1 函数
- 函数也是一个对象

```javascript

function F(a, b) {
   	return a * b;
}

console.log(F.length);   // 2  指函数参数的个数
console.log(F.constructor);   // function Function() { [native code] }
console.log(typeof F.prototype);   // "object"
```
- 函数拥有属性，prototype也是一个对象，函数中的一个对象

```javascript
// 这里我们把F这个函数当成一个对象，而这个对象中有个prototype 的对象  当然这是一个抽象的概念 下面的代码也只是一个比喻
F = {
    prototype: {}
}
```


### 1.2 prototype对象的属性
- 在prototype这个对象中，有个属性是constructo（构造函数），默认指向当前函数

```javascript
F = {
    prototype: {
        constructor: F    // 指向当前函数
    }
}
```
- 既然prototype是个对象，那我们也同样可以给它添加属性


```javascript
F.prototype.name = '李四';

// 那F就变成如下：
F = {
    prototype: {
        constructor: F,
        name: '李四'
    }
}

```
### 1.3 创造对象
- 构造函数 我们通常把构造函数的第一个字母大写 而且构造函数中，会默认返回this

```javascript
let f = new F();
console.log(f)  // 这里我们得到一个空对象 {}？
```
- 其实不是 我们打开这个空对象一看，里面有个__proto__的属性  ，这个新对象的__proto__指向的就是构造函数中的prototype属性

```javascript
//在这里 我们试试__proto__的作用
console.log(f.__proto__)
/*
输出
{
	name: "李四"
	constructor: ƒ F()
}
*/
//既然 __proto__ = prototype ，那么也是有constructor这个函数 

console.log(f.__proto__.constructor)

//输出这个函数时，指向的是构造函数本身


console.log(f.constructor)

// 这里有点需要注意 输出f.constructor时，得到的结果和f.__proto__.constructor是一样的

```
- `f.__proto__.constructor` 和 `f.constructor` 的区别

```javascript
//实际上他们两就是一个东西  __proto__这个属性。将constructor共享到子对象了。当构造函数的属性发生变化是，子对象也会跟着动态变化
F = {
    prototype: {
        constructor: F
    }
};

f1 = {
    age: 18,
    __proto__: {    // 既然我们已经把这个形象化为"共享"属性了，那就再形象一点
        constructor: F
    }
}

// 更形象化：
f1 = {
    age: 18,  // 这个是f1对象自身属性
    constructor: F  // 这个是从原型上"共享"的属性
}

```
- 尝试去更改原型链属性

```javascript
F.prototype.name = '张三'

let f  = new F()
console.log(f.name); //输出张三

F.prototype.name = '李四'
console.log(f.name); //输出李四

//注意 当我们仅仅只是打印f这个对象时，会发现依然是个空对象 ，这个name的属性，是从原型链上拿过来的
```


### 1.4 对象自身的属性和原型链的属性
- 当使用`hasOwnProperty`去监测name这个属性时，发现会得到false，说明name这个属性不是自身的属性

```javascript
function F(a) {
	this.age = a
}
F.prototype.name = '张三'
let f  = new F(18)

console.log(f.hasOwnProperty('name')); //输出false 不是自身的属性
console.log(f.hasOwnProperty('age')); //输出true  是自身的属性
    
```
- 尝试删除原型链属性

```
delete f.age;
console.log(f.age); // undefined

delete f.name;
console.log(f.name); // '张三'

```
原型链上的属性，无法在子对象上删除

- js属性的查找顺序,当我们使用一个属性时，js会优先的去自己本身找这个属性，如果找不到，就会去原型链上找


## 2 继承
## 2.1 原型链
当一个原型链指向另一个原型链的时候，这时候他们就

## 2.2继承
```
 //先定义三个构造函数

// 构造函数A
function A() {
	this.name = 'A';
};
A.prototype.say = function () {
	return this.name;
};
// 构造函数B
function B() {
	this.name = 'B';
};
// 构造函数C
function C(width, height) {
	this.name = 'C';
	this.width = width;
	this.height = height;
	this.getArea = function () {
		return this.width * this.height;
	};
};

// 我们让B的原型链指向A 
B.prototype = new A();

// 再让C的原型链指向B 
C.prototype = new B();
let c1 = new C(2, 6);
console.log(c1);   // {name: "C", width: 2, height: 6, getArea: ƒ}
console.log(c1.name);  // 'C'
console.log(c1.getArea()); // 12
console.log(c1.say());  // 'C'

//这时候我们会发现  C居然也有了say这个函数了  这是因为b继承了 a  b有了say这个方法 而c继承了b   所有c也有了
```

```javascript
// 这里我们会发现一个问题  当我们打印b的指向时， 会发现输出的都是A的构造函数
   // 这里我们会发现一个问题  当我们打印b和c的指向时， 会发现输出的都是A的构造函数
   console.log(B.prototype.constructor);  // ƒ A() {}
   let b1 = new B();
   console.log(b1.constructor);   // ƒ A() {}
   console.log(C.prototype.constructor);// ƒ A() {}
```

- 为什么会出现这种情况

```javascript
//我们用抽象化来解释一下
A = {
	name: 'A',
	say: function() {
        return this.name;
    },
    prototype：{
        constructor: A
    }
}
B = {
	name:'B'
    prototype：{
        constructor: B
    }
}

B.prototype = A
B = {
	name:'B'
    prototype：{
        name: 'A',
		say: function() {
			return this.name;
		},
		prototype：{
			constructor: A
		}
    }
}
B.constructor = A
```
- 如果要解决这个问题，我需要手动调整`B.prototype.constructor`的指向 ，c也是一样的

```javascript
B.prototype = new A();
B.prototype.constructor = B;
C.prototype = new B();
C.prototype.constructor = C;
```
- 效率的问题

当我们用某一个构造函数创建对象时，其属性就会被添加到this中去。并且当别添加的属性实际上是不会随着实例改变时，这种做法会显得没有效率。例如在上面的实例中，A构造函数是这样定义的：

```javascript
function A() {
    this.name = 'A';
    this.say = function() {
        return this.name;
    };
}
//这种方式 每new一个A 都会创造出一个name的属性 和say的方法，独占了一份内存


function A() {};
	A.prototype.name = 'A';
	A.prototype.say = function() {
		return this.name;
}
// 如果我们使用原型链的方式  所有实例出来的A 都是指向同一个name属性和say方法 达到优化性能的目的
// 但如果如果是一些经常可变的属性，则不适用于放在原型链上，我们要考虑应该将哪些属性放于原型链上更好

```
- 基于原型的方式继承

处于效率考虑，我们应当尽可能的将一些可重用的属性和方法添加到原型中去，这样的话我们仅仅依靠原型就可以完成继承关系的构建了，由于原型上的属性都是可重用的，这也意味着从原型上继承比在实例上继承要好得多，而且既然需要继承的属性都放在了原型上，又何必生成实例降低效率，然后又从所生成的实例中继承不需要的私有属性呢？所以我们直接抛弃实例，从原型上继承：

```javascript
function A() {};
A.prototype.name = 'A';
A.prototype.say = function() {
    return this.name;
}

// 构造函数B
function B() {};
B.prototype = A.prototype;  //  先继承，再进行constructor矫正和B.prototype的扩展
B.prototype.constructor = B;
B.prototype.name = 'B';

// 构造函数C
function C(width, height) {  // 此处的width和height属性是随参数变化的，所以就不需要改为共享属性
    this.width = width;
    this.height = height;
}
C.prototype = B.prototype;
C.prototype.constructor = C; //  先继承，再进行constructor矫正和C.prototype的扩展
C.prototype.name = 'C';
C.prototype.getArea = function() {
    return this.width * this.height;
}
```
- 这样的代码似乎更加优雅了,试试效果

```javascript
let b2 = new B();
console.log(b2.say());  // 'C'

// 这里会发现输出的是C不是我们 想要的效果
```

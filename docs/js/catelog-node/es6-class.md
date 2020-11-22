## 面向对象
- 面向对象更贴近我们的实际生活，但事物分为具体事务和抽象的事务
> 比如手机 如果我单单只是指手机 那么这就是个抽象的概念
这是手机可能会有一些公共的属性 ，比如一个方形的金属盒子，可以打电话
但如果我给一个手机具体指定了某个品牌，某个型号，那么这个手机就是一个具体的对象了
- 类和对象
> 对象通常是由属性和方法组成的
类：代表了对象的公共特征
实例对象：代表了对象的独立特征

## 创建一个构造函数
```javascript
class Men{
	constructor(name,age){
		this.name = name
		this.age = age
	}
	say(){
		console.log(`${this.name} 说了你好` );
	}
}
let men = new Men('张三',18)

men.say(); //输出 张三说了你好
```

## 构造函数的继承
- 创造一个构造函数

```javascript
class Women extends Men{

}
let  women = new Women('小翠',18)
women.say() // 输出  小翠 说了你好
```

- super方法

```javascript
# 当我们子类也定义了自己的属性时，就没办法再使用父类的方法了，需要使用super方法

class Women extends Men{
	constructor(name,age){
		this.name = name
		this.age  = age
	}
}

let  women = new Women(22,18)
console.log(women.say());

//这样输出就会提示报错
class Women extends Men{
	constructor(name,age){
		super(name,age)
		//如果后面子类还需要使用到this 需要将super写在this之前
		this.name = name
		this.age = age
	}
}
// 应该写成这样的形式才行

```
- 继承的就近原则
当一个方法或者属性被使用时，会先从子类中寻找，如果找不到再去找父类的

## this的指向
- constructor的this指向的是创建的实例对象
- 构造函数本身的this指向的是构造函数本身
- prototype的this指向的是实力对象
- 普通函数的this指向的是window
- 绑定函数的this指向的是函数的调用者
- 定时器的this指向的是window
- 立即执行函数的this指向的也是window

> ### this指向的改变方法
1.使用call方法调用函数时，第一个参数传递一个对象即可改变this的指向
2.使用apply函数调用 也可以改变this的指向，和上面的区别在于，第二个参数是个数组 
3.使用bind函数修改也可以修改this的指向，bind函数并不会去调用这个函数，用的场景也更多


## 对象的`__proto__` 对象
- 对象的` __proto__ `实际和构造含税的prototype这个对象是完全相等的，这是js内置给我们的一个隐性的对象
- 普通对象的prototype对象，也有`__proto__`这个属性，指向的是`Object`,Object的prototype指向的就是null了

## 注意点
- Object Array 这种基础的对象，我们无法将prototype对象重新赋值，只能在后面追加值

## 继承
- 在es6以前，没有提供extends的方法，我们只能使用原型链+构造函数的方法继承，这种也叫 _组合继承_  要使用到call这个方法
- call 的使用

```javascript
function fu(name,myName) {
	this.name = myName
	console.log('我是一个函数');
	console.log(this);
	this.say(name) // 输出 王五说了，李四不太行！
}
const obj = {
	name:'张三',
	say(name){
		console.log(this.name+'说了，'+name+'不太行！');
	}
}

// call的使用，可以修改函数中this的指向值，从第二个参数开始，才是传递给函数的参数
fu.call(obj,'李四','王五')
```

- 使用call进行继承

```javascript
function Father(name , age) {
	this.name = name
	this.age = age
}

function Son(name , age){
	Father.call(this,name , age) //开始继承 ，将Father的指向指向到Son
}
const men = new Son('张三',18)
console.log(men); // 输出 {name: "张三", age: 18}

```
- 以上的方法，只是继承了父类的构造函数，但是如果父类的原型对象，没有继承过来，
- 父类原型对象的继承方法

```javascript

Father.prototype.run = function (param) {
	console.log('我的父亲很会跑步');
}
Father.prototype.money = 10000
// 我们可以使用new的方式，将son的原型指向父类
Son.prototype = new Father()
// 但这里会导致一个问题 就是子类的constructor指向也会指到父构造函数去，所以需要手动的修正
Son.prototype.constructor = Son
```
- es6 提供了class的关键字，属于一种构造函数的语法糖。更加符合面向对象的编程。具体的语法上文


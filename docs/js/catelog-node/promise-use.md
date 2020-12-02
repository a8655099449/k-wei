---
title: promise的使用
date: 2020-12-02
tags:
  - js
  - 前端
categories: code
---

## 为什么要使用 promise？

1. promise 专门为了处理**回调函数**而生，除了回调函数，也可以写出漂亮而优雅的**链式编程**
2. 避免陷入**回调地狱**
3. 使代码变得更加的**优雅**
4. 代码的可维护性变高
5. promise是现代js最值得学习的技术之一
## 对比 Promise 函数和传统函数

::: details 展开查看

- 传统函数

```js
fn(prams, (res) => {
  // code
});
```

- promise 函数

```js
fn(prams).then((res) => {
  // code
});
```

> 是不是感觉没有什么区别？这是因为上面定义的都是是极简的函数，如果嵌套再多几层，你就会大呼`promise真香了`,下面我们再做对比

- 传统函数

```js
let fn1 = function(prams, callback) {
  setTimeout(() => {
    console.log("函数1执行完毕", prams);
    callback();
  }, 1000);
};
let fn2 = function(prams, callback) {
  setTimeout(() => {
    console.log("函数2执行完毕", prams);

    callback();
  }, 1000);
};
let fn3 = function(prams, callback) {
  setTimeout(() => {
    console.log("函数3执行完毕", prams);

    callback();
  }, 1000);
};
// 上面我们使用定时器来模拟几个异步函数
fn1(30, function() {
  console.log("我是函数1的回调函数");

  fn2(20, function() {
    console.log("我是函数2的回调函数");

    fn3(30, function() {
      console.log("我是函数3的回调函数");
      // 可以看到我们已经陷入的嵌套的地狱中了，这里这是模拟，如果代码再复杂一点,维护就会变得痛苦不堪
    });
  });
});
```

- Promise 写法

```js
let fn1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("函数1执行完毕");
      resolve();
    }, 1000);
  });
let fn2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("函数2执行完毕");
      resolve();
    }, 1000);
  });
let fn3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("函数3执行完毕");
      resolve();
    }, 1000);
  });

// 定义三个Promise函数，具体如何定义在下面会再介绍，这里我们只需要对比两种写法的直观性

fn1()
  .then(() => {
    console.log("我是函数1的回调函数");
    return fn2();
  })
  .then(() => {
    console.log("我是函数2的回调函数");
    return fn3();
  })
  .then(() => {
    console.log("我是函数3的回调函数");
  });
```

:::

## 定义 promise 函数

::: tip
定义一个 promise 函数一点也不复杂 ，我们只需在传统函数中 `returen` 一个 promise 实例
<br/>

:::

```js
//  Promise实例的 resolve, reject 参数，分别代表着成功和失败的回调函数
let promiseFun = () =>
  new Promise((resolve, reject) => {
    // 这里还是使用定时器来模拟异步
    setTimeout(() => {
      let randomNum = Math.random();
      // 为了模拟场景不确定性，我们使用一个随机数只要随机数>0.5 触发 成功的函数，否则失败
      if (randomNum > 0.5) {
        resolve(randomNum);
      } else {
        reject(randomNum);
      }
    }, 1000);
  });

// 定义好了之后进行调用
// .then 捕获成功的函数
// .catch 捕获失败的函数
promiseFun()
  .then((res) => {
    console.log("成功了", res);
  })
  .catch((err) => {
    console.log("失败了", err);
  });
```

## Promise.all 的使用方法

:::tip
promise.all 专门用于同时处理多个异步操做 , 参数是一个数组,数组里可以传入若干个 promise 函数
:::

```js
// promiseFun1(),promiseFun2() 和上面的写法是一样，使用定时器+随机数的组合
Promise.all([promiseFun1(), promiseFun2()])
  .then((res) => {
    console.log("成功了", res);
  })
  .catch((err) => {
    console.log("失败了", err);
  });
// 注意 ：
// 只有当数组里面所有的promise调用了resolve的函数
// then()函数才会开始调用 res参数是一个数组,放着所有函数的回调值

// 但只要其中一个调用了reject函数
// catch就会开始发挥作用 err是调用reject那个Promise函数的回调值
```

## async 和 await

::: tip
`aysnc\await`是 es7 更新中 , js 对于 Promise 函数的一种语法糖
<br/>
可以说是 js 解决目前解决回调函数的**终极答案**
<br/>
有了它,我们甚至不用理会 Promise.all()
:::

### async 和 Promise 函数的使用对比

> 例子中使用的函数还是上面我们定义的形式,我们这里暂时不考虑`.catch`的情况

- promise 的普通使用形式

```js
fn1()
  .then((res) => {
    console.log("我是函数1的回调函数");
    return fn2();
  })
  .then((res) => {
    console.log("我是函数2的回调函数");
    return fn3();
  })
  .then((res) => {
    console.log("我是函数3的回调函数");
  });
// 这还不算优雅
```

- async 的使用

```js
(async () => {
  let res1 = await fn1();
  let res2 = await fn2();
  let res3 = await fn3();
})();
// 这才是终极优雅
```

### aysnc\await 的使用

> 它们的使用甚至不需要进行详细的解释,让我们来看上面的代码

::: warning 使用它们的要点

1. `async` 和 `await` 必定是成双出现的 , await 必须要在函数中并且是 async 的函数中使用,否则就会报错
2. `await`后面跟着的必定是 promise 函数, js 解析的时候遇到`await` 就会等函数的`reslove`调用才会往下继续执行

```js
(async () => {
  let res = await fn1();
  // 在fn1的resolve没调用时,下面的代码不会执行
  fn1().then((res) => {});
  // res === res
})();
```

3. 要捕捉`reject`需要使用 `try...catch`

```js
try {
  let res1 = await fn1();
  let res2 = await fn2();
  let res3 = await fn3();
} catch (error) {
  // 如果以上有某个函数调用了reject 这里就会触发
}
```

4. `async`函数本质其实也是一个 Promise 的实例对象,所以你要获得这种函数的返回值,也要使用`.then`的方法

```js
async function fn1() {}
console.log(fn1());
```

![alt](http://photo.tuituisoft.com/picgo/20201202171445.png)
<br/>

5. 所以 在async函数中 `return` 和 `throw` 对应着Promise的`resolve`和`reject`
```js
async function fun1(falg) {
  if (falg) {
    return "aaa";
  } else {
    throw "bbb";
  }
}
fun1(true)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
6. 但似乎它并没有处理异步的能力

```js
async function fun1(falg) {
  setTimeout(() => {
			if (falg) {
				return "aaa";
			} else {
				throw "bbb";
			}

	// 我们不能这样 因为这是在另一个函数内了 
	}, 1000);
}


```
:::

## 最后
如果要使用好promise，还是需要不断的实践 

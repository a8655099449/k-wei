## promise

### 为什么要使用promise？

1. promise专门为了处理**回调函数**而生，除了回调函数，也可以写出漂亮而优雅的**链式编程**
2. promise可以避免陷入**回调地狱**
3. promise可以使代码变得更加的**优雅**
4. promise可以使代码的可维护性变高

### new promise








```javascript
# 这里使用一个定时器函数来模仿异步操作

let count=0
new Promise((resolve,reject)=>{
    setTimeout(() => {
        count++
        resolve()
    }, 1000);

}).then(()=>{
    console.log('调用函数'+count);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            count++
            resolve()
        }, 1000);
    })

}).then(()=>{
    console.log('调用函数'+count);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            count++
            resolve()
        }, 1000);
    })
}).then(()=>{
    console.log('调用函数'+count);
})
```

- 如果调用的是`resolve()` 使用`then()`进行捕获 ，如果调用的是`reject`（也就是失败）。使用catch()，进行捕获。当然，then其实也可以捕获两种情况，但个人认为，不太合适

### promise的链式编程

```javascript
# 当我们没有涉及到异步操作时，也可以使用promise来写出漂亮的链式编程，而且，这种写法比上面的更简单些

new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('第一次调用')
    }, 1000);
}).then(res=>{
    console.log(res);
    // 最简便的写法
    throw '错误了'
    return res+'第二次调用'  

}).then(res=>{

    console.log(res);

}).catch(err=>{

    console.log(err);

})

# 我们可以直接使用return 和 throw的方法 来抛出成功或者失败的结果
# promise回去自动的调用then（） 或者catch 的函数来分别进行不同的处理
```

### promise.all的使用方法

```javascript
# promise.all 专门用于同时处理多个异步操做，所设计的方法


# 我们这里同样使用定时器来模仿异步操作
Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('我们的请求1')
        }, 1000);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject()
            resolve('我们的请求2')
        }, 2000);
    }),
]).then(res=>{
    console.log(res);
}).catch(res=>{
    console.log('err');
})

# 只有当数组里面所有的promise调用了resolve的函数
# then()函数才会开始调用

# 但只要其中一个调用了reject函数
# catch就会开始发挥作用，并且then函数失效
```


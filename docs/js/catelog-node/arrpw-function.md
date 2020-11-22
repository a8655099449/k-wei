## es6的箭头函数

- 定义一个最简单的箭头函数

```javascript
const fnDemo = ([这里可以选填参数])=>{
} 
```



- 箭头函数的返回值

```javascript
// 两个参数时
const sum = ( a , b)=>{
return a + b    
}
// 只有一个参数时可以简写
const power = n => {return n*n}

// 当只有一行代码时，也可以简写 省略大括号和return

const mul = ( a , b ) => a*b
```

  

- 箭头函数中的this 在对象中 和function是不一样的  function指向的是window 箭头函数指向的是对象
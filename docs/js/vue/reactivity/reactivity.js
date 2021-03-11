
const baseHandler = {
  get(target, key) {
    return target[key] ? target[key] : '你访问的值不存在'
  },
  set(target, key, value) {
    console.log('============触发set动作========================');
    console.log(target, key, value);
    console.log('====================================');
    target[key] = value;
  },
};

function reactive(target) {
  const observed = new Proxy(target, baseHandler);

  return observed;
}


let obj = reactive({
  name:'张三',
  age:18
})

// 这里会触发 get() 函数，具体返回的数据根据 get() return 的值决定
console.log(obj.age); // 输出18
console.log(obj.sex); // 输出我们事先定义的默认值


// 这里会触发 `set()` 函数





let arr = []
try {
  console.log('===============push=====================');
  arr.push(1)
} finally{
  console.log('===============finally=====================');
  arr.pop()
}

console.log('===============arr=====================');
console.log(arr);

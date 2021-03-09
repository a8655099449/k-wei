function computed() {}

function effect() {}

// 用proxy监听一个对象，数据的获取会触发get函数

// 赋值的时候，会触发set 执行收集到的effect

/* 
{ 
  target:{
    key:[ effect1 , effect2 ]


  }

}


*/

let  targetMap = new WeakMap();




const baseHandler = {
  get(target, key) {
    const ret = target[key];
    track(target, key)
    return ret;
  },
  set(target, key, value) {
    const info = {
      oldValue: target[key],
      newValue: value,
    };

    target[key] = value;
    // todo 

  },
};

function reactive() {
  const observed = new Proxy(target, baseHandler);

  return observed;
}

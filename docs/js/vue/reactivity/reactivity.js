
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



function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1').toLowerCase() 
}

getType([])     // "Array" typeof []是object，因此toString返回
getType(5)     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回


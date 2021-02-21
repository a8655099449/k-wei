class Promise {
  stateList = {
    pending: "pending",
    resolved: "resolved",
    rejected: "rejected",
  };
  state = this.stateList.pending; // 默认是等待中

  fulfillList  =[]  // 成功回调函数数组

  constructor(executor) {
    this.resolvedValue = undefined; // 用于存储成功回调函数参数
    this.rejectValue = undefined; // 用于存储失败回调函数参数

    let resolve = (...args) => {
      if (this.state !== this.stateList.pending) return;

      this.resolvedValue = args;
      this.state = this.stateList.resolved;
      // 将所有的还在等待执行的函数全部执行
      this.fulfillList.forEach(fn => fn(...args))

    };
    let reject = (...args) => {
      this.rejectValue = args;
      if (this.state !== this.stateList.pending) return;
      this.state = this.stateList.rejected;
    };
    executor(resolve, reject);
  }
  then(onfulfilled) {
    // 如果状态已经是成功的，那么我们直接调用函数
    if (this.state === this.stateList.resolved) {
      return onfulfilled(...this.resolvedValue);1
    }
    // 如果还在执行中，那么我们就这个函数放到一个数组中，等到执行完毕的时候再调用，也就是构造函数的`resolve` 函数
    if (this.state === this.stateList.pending) {
      this.fulfillList.push(onfulfilled)
    }
  }
}


let test1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0) {
        resolve("成功的参数");
      } else {
        reject("失败的参数");
      }
    }, 1000);
  });

test1().then((res) => {
  console.log(`回调结束，返回的参数是: ${res}`);
});

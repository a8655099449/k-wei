
const p = new Promise((resolve, reject) =>{
  console.log('Promise执行');
  setTimeout(() => {
    if (Math.random() > -0.5) {
      return resolve()
    }
    reject()
    
  }, 1000);

})

console.log('-1-');
p.then(res=>{
  console.log('异步执行');

})
console.log('-2-');
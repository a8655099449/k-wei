// // let reg = /[^\d]/g  // 不能包含a

// let reg2 = /a(?=a)/g

// // 以下两组结果相同,是因为substring 在调用时,如果第一个参数大于第二个参数,会智能的调换位置
// console.log('abca'.substring(1,2)); // b
// console.log('abca'.substring(2,1)); // b

let str = "99999999";
let reg = /(?=(\B)(\d{3})+$)/g;
let res = str.replace(reg, `,`);
console.log("最终结果", res);

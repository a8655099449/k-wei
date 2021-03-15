"use strict";

// let reg = /[^\d]/g  // 不能包含a
var reg2 = /a(?=a)/g;
console.log('aaaaca'.match(reg2));
console.log('aaaaca'.toLowerCase());
console.log('aaaaca'.toLocaleLowerCase());
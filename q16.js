
//Q:16
let isEven = n => n%2===0?true:false;

console.log(isEven(4));
console.log(isEven(5));

let results = r => r>=35?'Pass':'Fail';
console.log(results(78));
console.log(results(34));

let greet = name => `Hello ${name?name:'Guest'}`;
console.log(greet());
console.log(greet('Malissa'));

//Q:17
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

let sums = (...num) => num.reduce((total, n) => total + n, 0);
console.log(sums(1, 4, 7, 9));

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {name, age, address:{
  city, pin
}} = user;

console.log(`User ${name} is ${age} years old and lives in ${city} (${pin})`);

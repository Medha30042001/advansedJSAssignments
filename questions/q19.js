
//Q:19
//1. Template Literals + Expressions
//a)
console.log(`5 + 7 = ${5+7}`);
//b)
let firstName = 'John';
let lastName = 'Doe';
console.log(`${firstName} ${lastName}`);

//2. Arrow Functions & this
console.log('\n');
//a)
const square = n => n*n;
console.log(square(7));
//b)
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();//undefined
//A normal functions get this.value as obj.value
//But arrow functions do not have their own 'this'
//its parent scope is not obj, its global scope
const obj1 = {
  value: 50,
  test(){
    console.log(this.value);
  }
};
obj1.test()

//3. Rest, Spread & Copying Objects
console.log('\n');
//a)
const product = { name: "Pen", price: 10 };
const {name, price} = product;
console.log(`A ${name} costs Rs.${price}`);
//b)
const a = { x: 1 };
const b = { y: 2 };
const merged = {...a, ...b};
console.log(merged);
//c)
const maxValue = (...num) => num.reduce((max, n) => (n > max ? n : max), -Infinity);
console.log(maxValue(5, 2, 7, 1, 9));

//4. Destructuring & Optional Chaining
console.log('\n');
//a)
const arr = [10, 20, 30];
const [p,,q] = arr;
console.log(p, q);
//b)
const laptop = { brand: "Dell", ram: "8GB" };
const {brand, ram} = laptop;
console.log(brand);
//c)
const info = {};
console.log(info?.bank);

//5. Scoping (let/var/const)
console.log('\n');
//a)
for (var i = 0; i < 3; i++) {}
console.log(i);//0 1 2
//b)
//for (let j = 0; j < 3; j++) {}
//console.log(j);//ReferenceError: j is not defined
//c)
//const prevents accidental reassignments

//6. Ternary Operator – Practice
console.log('\n');
//a)
let speed = kmph => kmph>60?'Fast':'Normal';
console.log(speed(89));
//b)
let ageLegal = age => age>=18?'Adult':'Minor';
console.log(ageLegal(16));
//c)
let sign = num => num>0?'Positive':(num==0?'Zero':'Negative');
console.log(sign(5));
console.log(sign(0));
console.log(sign(-7));

//7. Spread, Rest & Arrays
console.log('\n');
//a)
const nums = [1,2,3];
const newArr = [...nums, 4, 5]
console.log(newArr);
//b)
const a1 = ["x","y"];
const b1 = ["z"];
const ab = [...a1, ...b1];
console.log(ab);
//c)
const printNames = (...names) => names;
console.log(printNames("A","B","C"));

//8. Object Destructuring & Shorthand
console.log('\n');
//a)
const user = { id: 101, status: "active" };
const {id, status} = user;
console.log(`Id ${id} is ${status}`);
//b)
const ids = 101;
const role = "admin";
const users = {
  ids,
  role
};
//c)
const date = '30/4/25';
const title = 'The Poppy War';
const library = {
  date,
  title,
  book(){
    console.log(`${title} was borrowed on ${date}`);
  }
}
library.book();


//9. Template Literals (More Practice)
console.log('\n');
//a)
console.log(`Today is ${new Date().toDateString()}`);
//b)
let name1 = 'Malissa';
let score = 98;
console.log(`${name1} scored ${score}/100`);

//10. Arrow Function Shorthands
console.log('\n');
//a)
const addition = (g, h) => g+h;
console.log(addition(3, 4));
//b)
const isAdult = age1 => age1<18?false:true;
console.log(isAdult(67));
//c)
const double = m => 2*m;
console.log(double(8));

//11. Spread Operator (Arrays & Objects)
console.log('\n');
//a)
let arr4 = [9, 8, 2, 8, 4];
let arr5 = [...arr4];
console.log(arr5);
//b)
let arr2 = [3, 7, 1, 8, 3];
console.log([100, ...arr2]);
//c)
const objA = {
  fruit: 'Banana',
  color: 'Yellow'
};
const objB = {
  color: 'Red',
  number: 200
};
const objC = {...objA, ...objB};
console.log(objC);

//12. Optional Chaining (More Practice)
console.log('\n');
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3?.address?.city);
















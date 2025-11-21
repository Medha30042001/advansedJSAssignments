
//Q:15
let username = "Malissa";
let course = "Science";
console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};


let getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName('Melissa', 'Cooper'));

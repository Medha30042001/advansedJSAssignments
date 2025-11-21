
//Q:18
/*
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); //20
console.log(x); //ReferenceError : x is not defined

//this happens because let is block-scoped 
//and var is function-scoped or global-scoped if not in a function
*/

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);


const apartment = {
  block: {
    floor: {
      flat: 201
    }
  }
}

console.log(apartment?.block?.floor?.flat);
console.log(apartment?.block?.floor?.room);


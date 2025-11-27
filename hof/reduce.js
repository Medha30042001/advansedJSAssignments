
let prodCategories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let categoryCount = prodCategories.reduce((obj, category) => {
    obj[category] = (obj[category] || 0) + 1;
    //(obj[category] || 0) means if obj[category] is undefined then take 0 
    // else take obj[category] value
    //'obj[category]' here means key of obj
    //'category' means value of obj
    return obj;
}, {});
console.log(categoryCount); 

let sortedCategories = Object.entries(categoryCount)
.sort((a, b) => b[1] -a[1])
.map(entry => entry[0]);

console.log(sortedCategories);


/**
    const sortedCategories = Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])  // sort by count
  .map(entry => entry[0]);      // return only category names

console.log(sortedCategories);
// ["toys", "electronics", "clothing"]

 */
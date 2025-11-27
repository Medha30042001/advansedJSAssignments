
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
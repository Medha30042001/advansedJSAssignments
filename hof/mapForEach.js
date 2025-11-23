
let items = [{ name: "Laptop", price: 1000 }, 
                { name: "Mouse", price: 20 }];

function processProducts(products){
    const productNames = products.map(p=>p.name);
    console.log(productNames);
    
    products.forEach(pr=>{
        if(pr.price > 50){
            console.log(`${pr.name} is above $50`);
        }else{
            console.log(`${pr.name} is below $50`);
        }
    });
    return productNames;
}

processProducts(items);
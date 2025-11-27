
let count = 0;

let loadingPage = setInterval(() => {
    count++;
    console.log("Loading...");   
    if(count >=5) {
        clearInterval(loadingPage);
        console.log("Loaded successfully !")
    } 
}, 1000);


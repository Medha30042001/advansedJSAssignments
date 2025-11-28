
let name = 'Medha';

function displayMessage(){
    console.log(`Hello ${name}!`);
}

function getUserInput(callback){
    console.log('Loading...');
    setTimeout(() => {
        callback();
    }, 1000);
}

getUserInput(displayMessage);
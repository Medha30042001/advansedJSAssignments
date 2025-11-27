const prompt = require("prompt-sync")();

let sec = parseInt(prompt('Enter number of seconds: '));
console.log(sec);

let count = 0;
let timer = setInterval(() => {
    console.log("Time remaining: " + (sec - count));
    count++;
    if(count > sec) {
        clearInterval(timer);
        console.log("Countdown Complete !")
        return;
    }

    setTimeout(() => {
        let input = prompt("Press s to stop: ");
        if(input === 's') {
            clearInterval(timer);
            console.log("Countdown stopped by user!");
        }
    }, 0);
}, 1000);
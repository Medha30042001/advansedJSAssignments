
let duration = 2000;

function onComplete(t){
    console.log(`Timer of ${t} ms is complete`);
}

function timer(callback, dur){
    console.log('Starting...');
    let intId = setInterval(() => {
        console.log('tick...');
    }, 300);
    setTimeout(() => {
        callback(dur);
        clearInterval(intId);
    }, dur);
}

timer(onComplete, duration);
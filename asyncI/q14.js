console.log("Begin");
setTimeout(() => {
    console.log("Timeout Task");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise Task");
});
console.log("End");

/*
synchronous tasks run first
so the first two lines in th output are
> begin
> end
next, microtasks like promises are executed
hence the third line is
> Promise Task
setTimeout is a macrotask, it's in the macro task queue
so it runs last
> Timeout Task
*/

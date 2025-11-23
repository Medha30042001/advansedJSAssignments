function createCounter() {
    let count = 0;
    return {
        increment(){
            count++;
            console.log("Current Count: " + count);
        },
        decrement(){
            count--;
            console.log("Current Count: " + count); 
        },
        getCount(){
            console.log("Current Count: " + count);
        }
    }
}

const counter1 = createCounter();
counter1.increment(); 
counter1.increment();
counter1.getCount();
counter1.decrement();
counter1.getCount();

counter1.count = 100; 
console.log(counter1.count);
counter1.getCount();

const counter2 = createCounter();
counter2.increment(); 
counter2.getCount();
counter2.decrement();
counter2.getCount();

/*
In the createCounter function, 
the variable count is in the clobal execution context.
In this function, we are returning an object, which has 3 functions
increment, decrement and getCount.
Each of these functions remember the value of count.
Even after createCount() execution, count value is remembered.
This environment is called closure.

Here, indirectly count is private.
Even if counter1.count is set to 100,
getCount() still prints the original count value

When multipe counters are created, 
each counter gets a fresh copy of count.
Since only the return functions can modify the count variable,
and the outside code cannot change count value,
this is called data encapsulation.
*/
/*

Asynchronous:

In asynchronous operations, tasks are executed independently of the main program flow. They can start and finish at any time.
Asynchronous operations are non-blocking, meaning the program can continue to run while waiting for asynchronous tasks to complete.
Asynchronous operations are commonly used for tasks such as network requests, file I/O, or timer events.
console.log("At first line")
*/

// this is an Illustration of the Async Function
console.log("At fist line")
setTimeout(()=>{
    console.log("hello! I am inside the function after 3second")
},3000)

console.log("At last line")
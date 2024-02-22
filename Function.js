// function func()
// {
//     console.log("hello world")
// }
// // console.log(func())
// func()

// Arrow Function
// var func = (a,b) => console.log("hello world") 
// function calling
// func()

 /*
 // there is no need of curly braces when will only single line of statement exist 
    let sum = (a,b) => a+b

console.log(sum(10,20)) 
 
*/
//  If there is more than one statement then curly braces are required.
//   let celsius = (farenhite) => 
//   {
//   return (5/9) *(farenhite-32)
//   };
// console.log(celsius(100))
 
// //  If there is more than one statement then curly braces are required.
// const complexFunction = (a, b) => {
//     const sum = a + b;
//     return sum * 2;
    
//   };
// console.log(complexFunction(2,3))  

// // All about the Arrow Functions

// // Regular function expression
// const multiply = function(a, b) {
//     return a * b;
//   };
  
//   // Arrow function with expression body
//   const add = (a, b) => a + b;
  
//   // Arrow function with block body
//   const greet = (name) => {
//     return `Hello, ${name}!`;
//   };
  
//   // Arrow function with implicit return
//   const square = (num) => num * num;
  
//   // Using arrow functions with higher-order functions
//   const numbers = [1, 2, 3, 4, 5];
//   const squaredNumbers = numbers.map((num) => num * num);
  
//   console.log(multiply(3, 4)); // Output: 12
//   console.log(add(5, 7)); // Output: 12
//   console.log(greet("Alice")); // Output: Hello, Alice!
//   console.log(square(6)); // Output: 36
//   console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  
function outerFunction() {
    const arrowFunction = () => {
      console.log(arguments); // Accessing `arguments` from the outer function
    };
  
    arrowFunction();
  }
  
  outerFunction(1,6,7,4,5);
  
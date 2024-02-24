

// Here we are using directly the module functions
// This is the way for one by one exporting the Functions of Module
/*
 const add = require("./Custom_Module")
 console.log(add(10,20))

 const product = require("./Custom_Module")
 console.log(product(20,30))

*/

//Using Multiple fucntion of an Module 
/*
const sum = require("./Custom_Module")
console.log(sum.add(10, 20))

const multiply = require("./Custom_Module")
console.log(multiply.product(10, 20))

*/


// 3rd Way to Access Imported Functions
const jod = require("./Custom_Module")
console.log(jod.add(30,40))

const guna = require("./Custom_Module")
console.log(guna.product(30,40))
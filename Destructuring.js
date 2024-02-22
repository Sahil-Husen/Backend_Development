

// Array Destructuring
/*
const nums = [1,2,3,4,5]
const [a,b,c,d,e] =[1,2,3,4,5] 
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)


*/
// Using the destructuring Variable of Arrays
 /*function sum(int,int) {
    return a+b
}  
console.log(sum(10,20));*/


// Nested Destructuring
let arrs = [1,2,3,4,[5,6,7]]
let [a,b,c,d,r] = arrs;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(r)

// Destructuring In Objects
const person ={
    name:'sahil',
    age:21,
    city:'lko'
};
const {name,age,city} = person;
console.log(name)
console.log(age)
console.log(city)

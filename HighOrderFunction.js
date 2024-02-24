
// //First Order Function
//  function sum(a,b)
//  {
//     return a+b
//  }
//  let res  = sum(10,20)
//  console.log(res)

// //  Higher Order Function
// // which takes or returns Function
// function operation(opratorFn,a,b)
// {
//     return opratorFn(a,b)
// }
//  function add(a,b){
//     return a+b
//  }
//  operation(add,10,20)


// function Maths(cubeFn, a) {
//     return cubeFn(a);
// }

// function op(a) {
//     return a * a * a;
// }

// console.log(Maths(op, 10)) // This will correctly cube 10, resulting in 1000


// Some HigherOrderFunctions Related to Array
// ** forEach Loop


// let arr =["sachin","rahul","virat","chhahal"]
// arr.forEach((player)=>console.log((player)))

/*ar = ["mango","pineapple","banana","guave","strawberry"]
ar.forEach((fruit)=>console.log((fruit)))*/


// Map()
/*arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let cube = arr.map((num=>num**3))
console.log(cube)

arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(arr1.map(num=>num**2))
*/

//filter(): Returns a new array containing only the elements of the original array for which the given function returns true.
/*
arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log("The even numbers in the arr2 is :",arr2.filter(num=>num%2==0))
console.log("The odd numbers in the arr2 is :",arr2.filter(num=>num%2 !=0))
*/


// Reduce():Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
/*
arr3 = [1,2,3,4,5,6,7,8,9,10]
console.log("The sum of the Series is upto 10:",arr3.reduce((pre,cur)=>pre+cur))
*/
// // defining the array in JS
// arr = [1,2,3,4]
// console.log(arr)
// console.log(typeof arr)
// // Other way to define an array
// arr1 = new Array()

// arr1 =["sahil husen",1 ,2]
// console.log(arr1)
// for(int i=0 i<arr.length; i++)
// {
//     console.log(arr[i])
// }



// Iterate over the elements

// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let num = [10,20,30,40,50]
// console.log(num)
// for(let i=0;i<num.length;i++)
// {
//     console.log(num[i])
    
// }

// Arrays are Mutable means that it can be changed

// let arrs  =[90,80,60,50,40]
// console.log(arrs)
// console.log(arrs[2])
// arrs[4] = 100
// console.log(arrs)



// // Array Functions
// let arr = [1,3,5,6,8,9]
// console.log(arr)

//Adding an element in the end of the array
// push()
//  arr.push(100)
//  console.log(arr)

//deleting an element from the end of the arry  
//  pop()
// arr.pop(100)
// console.log(arr)

// Adding an element in array at begining
// Unshift()
// arr.unshift(1000)
// console.log("adding element at the beginning of the array" + ": "+arr)


// // Removes the first element of the array
// //shif()
// arr.shift() 
// console.log("removing element from the beginning of the array" +": " +arr)


// Converting the Array into String
// Join()
// let arrr = ['s','a','h','i','l']
// console.log("converting array into string :"+ " "+arrr.join())
// console.log(arrr.join(""))
// console.log(arrr.join("$"))


// Slicing the array
//Slice()
// let slices = [10,20,30,40,50]
// console.log(slices.slice())
// console.log(slices.slice(1))
// console.log(slices.slice(2,4))
// console.log(slices.slice(-4,-1))


// Splice() it Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// let splices = [1,2,3,4,5,6]
// let removed = splices.splice(2,4)
// here the splice method takes two parameter 1st index from the splicing is started
// and 2nd how many element should be removed from there
// console.log(removed)
// console.log(splices)


// Reverse a given array
// let rev = [1,2,3,4,5,6,7,8,9]
// console.log(rev)
// let ans = rev.reverse()
// console.log("Reversed array:" + " " +ans)

// Arranging the array
//Accending order
let order = [2,5,3,7,8,90]
console.log(order)
console.log(order.sort(function(a,b){
    return b-a;
}))
 
order.sort()
console.log(order)

console.log(order.sort((a,b)=>b-a) )

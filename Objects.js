// // Objects declaration
// let person = {
//     name: 'John',
//     age: 30,
//     isEmployed: true,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// // Accessing Oject Elements
// // console.log(person.name)

// //Declation
let Objects ={
    name:"sahil",
    age:21,
    isEmp : false,
    address:{
        state:'up',
        city:'lko',
        pin:226013
    }
};

// //Accessing the elements of the Objects
// console.log(Objects.name)
// console.log(Objects['age'])


// // Accessing the Nested element of the  Objects
// console.log(Objects.address.city)


// Objects Methods

// let person = {
//     name:'sahil',
//     age: 21,
//     greet: function()
//     {
//         console.log("Hello! " +this.name +"You're Good and well maintained Person with Handsome Personality")
//     }
// };
// person.greet();


// Adding data into Objects
// Objects.course ="BCA"
// console.log(Objects.course)


// Objects Iteration it give all the object Properties.
// for(let age in Objects)
// {
//     console.log(age + Objects[age])
// } 



// // Deleting Objects Keys and Objects itself
// delete Objects.course
// console.log(Objects)


// Iteratin Objects key
// for(key in Objects)
// {
//     console.log(key," => ",Objects[key])
// }

// Getting the values of the KEYs
// console.log(Object.keys(Objects))
 

// Clonning of the Objects for adding Addintional features in the Objects
// const new_obj = Object.assign({},Objects);
// console.log(new_obj)

// Assigning and giving additional feature in the Colonned Object
// const new_obj1 = Object.assign({},Objects,{role:'developer'})
// console.log(new_obj1)

const new_obj2 = Object.assign({},Objects,{ACTC:"1 Cr"})
// console.log(new_obj2)
console.log(new_obj2)

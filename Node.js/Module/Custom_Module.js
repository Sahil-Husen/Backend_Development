   
//    Creating our Own Moudule
   add = (a,b) =>{
    return a+b
 }

   product = (a,b)=>{
    return a*b
 }

// Exporting function one by one
/*
 module.exports = add ;
 module.exports = product;
 */

//  Exporting Multiple Function at Same time or One Time
/*
 module.exports={
   add:add,
     product:product
 }

 */


//  3rd Way to Export any Function

exports.add = (a,b) =>{
    return a+b
 }

   exports.product = (a,b)=>{
    return a*b
 }

// File System Module
// Synchronous Way to Read A File

/*

const fs = require('fs')
const fileContent =fs.readFileSync("./read.txt")
console.log("The content of the file is"+fileContent)

*/


// Asynchoronous Way to Read A File
/*
const fs = require('fs')
const content = fs.readFile("./read.txt",(err,content)=>{
    if(err)
    {
        console.log("Error in Reading"+err)
    }
    else{
        console.log("Content of the file is ::=>"+content)
    }
})
*/

/*
const fs = require('fs')
const cont = fs.readFileSync("./read.txt")
console.log("The file content is: "+cont)
*/
const fs = require('fs')
const read = fs.readFile('./read.txt',(err,read)=>{
    if(err)
    {
        console.log("Error occur"+err)
    }
    console.log("File content is:  "+read)
})

// Sync way to write a File 

/*
const fs = require('fs')
const write = fs.writeFileSync('write.txt',"Hey this File is Written through Coding")
console.log("The file has been written " +write)
*/


// Async Way to Write a File

const fs = require('fs')
const likho = fs.writeFile('./write.txt',"written by sahil husen",error=>{
    if(error)
    {
        console.log("Error in Writing the file",error)
    }
    
    console.log("File has been Written successfully!"+likho)
})


// If we want that we could not overwrite the existing data so Use Append
const fs = require('fs');

fs.appendFile('./write.txt', " written by sahil husen", error => {
    if (error) {
        console.log("Error in writing the file", error);
    } else {
        console.log("Data has been appended to the file successfully!");
    }
});

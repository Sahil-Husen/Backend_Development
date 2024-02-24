
// // Creating a SERVER
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.end("Developer Sahil! Server is Runnig Well.")
    }
    else{
        res.end("You're trying to hit a wrong URL")
    }
})

// Starting a server
server.listen(8000,()=>{
    console.log("Server has been Started!")
})

/*
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.end("Hey Developer Sahil! Your Server is Runnig Good")
    }
    res.end("You're hitting wrong URL.")
})
*/
// Starting a Server
/*
server.listen(8000,()=>{
    console.log("Server has been Started!")
})

*/












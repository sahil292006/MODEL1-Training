var http = require('http')
http.createServer((req,res)=>{
    res.end("Welcome here..");
}).listen(8080);
import fs from 'fs';
import http from 'http';

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.readFile("home.html",(error,data)=>{
        res.write(data);
        res.end();
    });
}).listen(5000);
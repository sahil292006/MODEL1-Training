// task24_server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'POST' && req.url === '/api/v1/orders') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log("Programmatic Order Received Successfully Over API:", data);
            
            res.writeHead(201);
            res.end(JSON.stringify({ 
                status: "success", 
                message: "Order synchronized cleanly in workspace layer" 
            }));
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Backend API Server natively online on port 3000");
});
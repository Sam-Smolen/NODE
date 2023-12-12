// Building a server with node js

const http = require('http');

const server = http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, I am the response');
});
server.listen(8181,'127.0.0.1');
console.log('server is running on localhost8181');
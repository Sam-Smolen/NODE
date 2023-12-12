// Building a server with node js

const http = require('http');
const fs = require('fs');

const HTML = fs.readFileSync(`${__dirname}/index.html`)

const server = http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(HTML);
});
server.listen(8181,'127.0.0.1');
console.log('server is running on localhost8181');
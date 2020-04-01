console.log("Hello World");

const http = require('http');

const webserver = http.createServer(function(req, rep) {
    rep.writeHead(200);
    let hello = 'hello world!';
    Response.end(hello);
});

webserver.listen(8080);
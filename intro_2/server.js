var http = require('http');
var url = require('url');
var querrystring = require('querystring');


const webserver = http.createServer(function(req, resp) {

    var page = url.parse(req.url).pathname;
    var str = '';

    switch (page) {
        case '/':
            resp.writeHead(200);
            str = "Bienvenue";
            break;
        case '/hello':
            resp.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            str = "<h1>Hello world!</h1>";
            break;
        default:
            resp.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
            str = "Non trouvé";
            break;
    }
    resp.end(str);

})

webserver.listen(8080);
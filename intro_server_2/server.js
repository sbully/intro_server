var http = require("http");
var url = require("url");
var querrystring = require("querystring");
const events = require("events");

const result = [];

var hello = function hello() {
  console.log("hello");
  result.push("hello");
};

var hellobonjour = function hellobonjour() {
  console.log("hellobonjour");
  result.push("hellobonjour");
};

var hellorequest = function hellorequest() {
  console.log("hellorequest");
};

const handler = new events.EventEmitter();
handler.addListener("_requete", hellorequest);
handler.addListener("/hello", hello);
handler.addListener("/hello/bonjour", hellobonjour);

const webserver = http.createServer(function (req, resp) {
  var page = url.parse(req.url).pathname;
  var param = querrystring.parse(url.parse(req.url).query);

  handler.emit("_requete");

  result.splice(0, result.length);

  handler.emit(page);

  if (result.length > 0) {
    resp.writeHead(200, { "Content-type": "application/json; charset=utf-8" });
    let json = JSON.stringify(result);
    console.log(json);
    resp.end(json);
  } else {
    resp.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    console.log("erreur 404");
    resp.end("404 : File not found");
  }

  /*   resp.writeHead(200);
  resp.end("hello world"); */
});

webserver.listen(8080);

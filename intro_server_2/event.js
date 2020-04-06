const events = require("events");

var handler = new events.EventEmitter();

var listener = function () {
  console.log("ecouteur un");
};

var listener2 = function () {
  console.log("ecouteur deuxs");
};

handler.addListener("connexion", listener);
handler.addListener("requete", listener2);

handler.emit("connexion");

handler.removeListener("requete", listener2);

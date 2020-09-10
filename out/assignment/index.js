"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var requestListener = require("./routes");
var PORT = 5000;
var listeningListener = function () {
    console.log("Server listening on port " + PORT);
};
var server = http.createServer(requestListener);
server.listen(PORT, listeningListener);
//# sourceMappingURL=index.js.map
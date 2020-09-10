"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var requestHandler = function (req, res) {
    var url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter your message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && req.method === 'POST') {
        var body_1 = [];
        req.on('data', function (chunk) {
            console.log(chunk);
            body_1.push(chunk);
        });
        return req.on('end', function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var message = parsedBody.split('=')[1];
            fs.writeFile('testMessage.txt', message, function (err) {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else {
        console.log(req.url, req.method, req.headers);
        // process.exit();
        res.setHeader('Content-Type', 'text/html');
        res.write('suppp');
        res.end();
    }
};
module.exports = requestHandler;
//# sourceMappingURL=routes.js.map
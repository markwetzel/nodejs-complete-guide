"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [];
var requestListener = function (req, res) {
    var method = req.method, url = req.url;
    var bodyContent;
    if (method === 'POST') {
        if (url === '/create-user') {
            var chunkBody_1 = [];
            if (method === 'POST') {
                // Access user-submitted content with Node
                // Data comes in as chunks
                // Build a body array with those chunks to be converted to readable format later
                req.on('data', function (chunk) {
                    console.log({ chunk: chunk });
                    chunkBody_1.push(chunk);
                });
                // 'end' signals the completion of data transfer
                req.on('end', function () {
                    console.log(chunkBody_1);
                    // Convert chunk array to usable data
                    var dataContents = Buffer.concat(chunkBody_1).toString();
                    var username = dataContents.split('=')[1];
                    console.log({ dataContents: dataContents });
                    console.log({ username: username });
                    // Redirect back to users
                    // 302 = redirection - found
                    res.statusCode = 302;
                    res.setHeader('Location', '/users');
                    users.push(username);
                    console.log({ users: users });
                    return res.end();
                });
            }
        }
    }
    else if (method === 'GET') {
        switch (url) {
            case '/':
                bodyContent = 'Welcome to the server, user.';
                break;
            case '/users':
                bodyContent = "\n        <ul>\n          <li>Mark</li>\n          <li>Dan</li>\n          <li>Matt</li>\n        </ul>\n\n        <form action=\"/create-user\" method=\"POST\">\n          <input name=\"username\" placeholder=\"Username\" type=\"text\" />\n          <button type=\"submit\">Add User</button>\n        </form>\n      ";
                break;
            default:
                bodyContent = '404';
                break;
        }
        res.setHeader('Content-Type', 'text/html');
        res.write("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>Anonymous Server</title>\n        </head>\n        <body>\n          " + bodyContent + "\n        </body>\n      </html>\n    ");
        return res.end();
    }
};
module.exports = requestListener;
//# sourceMappingURL=routes.js.map
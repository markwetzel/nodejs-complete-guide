"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express = require("express");
var path = require("path");
var adminRoutes = require('./routes/admin');
var shopRoutes = require('./routes/shop');
var app = express();
app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
var server = http.createServer(app);
var PORT = 3005;
server.listen(PORT, function () { return console.log("Listening on " + PORT); });
//# sourceMappingURL=app.js.map
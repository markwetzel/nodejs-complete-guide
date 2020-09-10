"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var rootDir = require('../util/path');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
module.exports = router;
//# sourceMappingURL=shop.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var rootDir = require('../util/path');
var router = express.Router();
router.post('/add-product', function (req, res, next) {
    console.log(req.body);
    return res.redirect('/');
});
router.get('/add-product', function (req, res, next) {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
module.exports = router;
//# sourceMappingURL=admin.js.map
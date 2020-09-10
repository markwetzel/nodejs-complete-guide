import express = require('express');
import path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin.ts');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { products, docTitle: 'Shop' });
});

module.exports = router;

import express = require('express');
import path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  return res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product' });
});

exports.routes = router;
exports.products = products;

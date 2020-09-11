import { Request, Response, NextFunction } from 'express';

const Product = require('../models/product');

exports.getAddProduct = (req: Request, res: Response, next: NextFunction) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    // layout: false,
  });
};

exports.postAddProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = new Product(req.body.title);
  product.save();
  return res.redirect('/');
};

exports.getProducts = (req: Request, res: Response, next: NextFunction) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

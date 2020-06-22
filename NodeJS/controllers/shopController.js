const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req,res,next)=>{
    // console.log('In the another middleware');
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(basePath,'views','shop.html'));
    Product.fetchAll(products=>{
        res.render('shop/index',{
            prods: products ,
            path: '/',
            pageTitle : 'My Shop'
        });
    });
}

exports.getCart = (req,res,next) => {
    res.render('shop/cart',{
        pageTitle: 'Your Cart',
        path: '/cart'
    });
}

exports.postCart = (req,res,next) => {
    const productId = req.body.productId;
    Product.findById(productId,product=>{
        Cart.addProduct(productId,product.price);
    });
}

exports.getOrders = (req,res,next) => {
    res.render('shop/orders',{
        pageTitle: 'Your Orders',
        path: '/orders'
    });
}

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods: products ,
            path: '/products',
            pageTitle : 'Get All Products'
        });
    });
}

exports.getProductDetail = (req,res,next) => {
    const productId = req.params.productId;
    Product.findById(productId,product=>{
        res.render('shop/product-detail',{
            product: product,
            pageTitle: 'Product Detail',
            path: '/products'
        });
    })
}

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
       pageTitle: 'Checkout',
       path: '/checkout'
    });
}
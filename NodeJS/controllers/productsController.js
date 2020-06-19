const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(basePath,'views','add-product.html'));
    res.render('add-product',{
        path: '/admin/add-product',
        pageTitle: 'Add Product'
    });
};

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    return res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
    // console.log('In the another middleware');
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(basePath,'views','shop.html'));
    Product.fetchAll(products=>{
        res.render('shop',{
            prods: products ,
            path: '/',
            pageTitle : 'My Shop'
        });
    });

    
}
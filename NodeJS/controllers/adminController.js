const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(basePath,'views','add-product.html'));
    res.render('admin/add-product',{
        path: '/admin/add-product',
        pageTitle: 'Add Product'
    });
};

exports.postAddProduct = (req,res,next)=>{
    const title         = req.body.title;
    const imageUrl      = req.body.imageUrl;
    const price         = req.body.price;
    const description   = req.body.description;

    const product = new Product(title,imageUrl,price,description);
    
    product.save();
    return res.redirect('/');
};

exports.getProduct = (req,res,next) => {
    Product.fetchAll(products=>{
        res.render('admin/product-list',{
            prods: products ,
            path: '/admin/products',
            pageTitle : 'Get Admin Products'
        });
    });
}
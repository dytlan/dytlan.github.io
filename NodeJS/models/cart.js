const fs        = require('fs');
const path      = require('path');

const rootDir   = require('../helpers/basepath'); 

const cartPath      = path.join(rootDir,'data','cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice){
        //Fetch Previous Cart
        fs.readFile(cartPath,(err,fileContent)=>{
            let cart = {products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //Analyze Cart => Find Existing Product
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            //Add New Product / Increase Quantity
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty+= 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id:id, qty:1};
                cart.products = [...cart.products,updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(cartPath,cart,(err)=>{
                console.log(err);
            })
        });
    }
}
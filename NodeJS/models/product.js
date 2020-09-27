const fs        = require('fs');
const path      = require('path');

const basePath  = require('../helpers/basepath');

const Cart      = require('./cart');

const p = path.join(
    basePath,
    'data',
    'products.json'
);

const getProductsFromFile = callback => {
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    });    
}

module.exports = class Product{
    constructor(id,title,imageUrl,price,description){
        this.id             = id;
        this.title          = title;
        this.imageUrl       = imageUrl;
        this.price          = price;
        this.description    = description;
    }

    save(){
        getProductsFromFile(products=>{
            if(this.id){
                const existingProductIndex = products.findIndex(product => product.id === this.id);
                const updatedProduct  = [...products];
                updatedProduct[existingProductIndex] = this;
                fs.writeFile(p,JSON.stringify(updatedProduct),err => {
                    console.log(err);
                })
            }
            else{
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p,JSON.stringify(products),(err)=>{
                    console.log(err);
                });
            }
        });
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }

    static findById(productId,callback){
        getProductsFromFile(products=>{
            const product   = products.find(p => p.id === productId);
            callback(product);
        });
    }

    static deleteById(productId){
        getProductsFromFile(products=>{
            const product          = products.find(p => p.id === productId);
            const updatedProduct   = products.filter(p => p.id !== productId);
            fs.writeFile(p,JSON.stringify(updatedProduct),err => {
                if(!err){
                    Cart.deleteProduct(productId,product.price);
                }
            })
        });
    }
}
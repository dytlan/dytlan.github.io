const fs        = require('fs');
const path      = require('path');

const basePath  = require('../helpers/basepath');

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
    constructor(title,imageUrl,price,description){
        this.title          = title;
        this.imageUrl       = imageUrl;
        this.price          = price;
        this.description    = description;
    }

    save(){
        this.id = Math.random().toString();
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
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
}
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
            callback([]);
        }
        callback(JSON.parse(fileContent));
    });    
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
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
}
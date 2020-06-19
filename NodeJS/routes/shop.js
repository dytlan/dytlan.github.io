// const path      = require('path');

const express   = require('express');

// const basePath  = require('../helpers/basepath');
const productsController = require('../controllers/productsController');

const router    = express.Router();

// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next(); // Allow the request to continue to the next middleware in line
// });

router.get('/',productsController.getProducts);

module.exports = router;

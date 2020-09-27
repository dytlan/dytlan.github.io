// const path      = require('path');

const express   = require('express');

// const basePath  = require('../helpers/basepath');
const shopController = require('../controllers/shopController');

const router    = express.Router();

// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next(); // Allow the request to continue to the next middleware in line
// });

router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getProductDetail);
router.get('/cart',shopController.getCart);
router.post('/cart',shopController.postCart);
router.post('/delete-cart',shopController.deleteCart);
router.get('/orders',shopController.getOrders);
router.get('/checkout',shopController.getCheckout);

module.exports = router;

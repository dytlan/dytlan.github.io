// const path      = require('path');

const express   = require('express');

// const basePath  = require('../helpers/basepath');
const adminController = require('../controllers/adminController');

const router    = express.Router();

router.get('/products',adminController.getProduct);

router.get('/add-product',adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/edit-product/:productId',adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct);

module.exports      = router;
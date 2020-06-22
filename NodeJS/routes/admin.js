// const path      = require('path');

const express   = require('express');

// const basePath  = require('../helpers/basepath');
const adminController = require('../controllers/adminController');

const router    = express.Router();

router.get('/product',adminController.getProduct);

router.get('/add-product',adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

module.exports      = router;
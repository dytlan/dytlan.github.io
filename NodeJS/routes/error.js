const express   = require('express');

const router    = express.Router();

const errorsController = require('../controllers/errorsController');

router.use(errorsController.pageNotFound);

module.exports = router;
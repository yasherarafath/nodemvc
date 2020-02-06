const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');
router.get('/test',ProductController.test);
router.get('/hello',ProductController.hello);
router.get('/product-create',ProductController.product_create);
router.get('/product-details',ProductController.product_details);

module.exports = router;
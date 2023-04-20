const express = require('express');

const router = express.Router();

const{
    getAllProducts,
    addsProduct
} = require('../controllers/controllersProduct');

router.get('/mallu_product', getAllProducts);
router.post('/mallu_product', addsProduct);


module.exports = router;
const express = require('express');
const router = express.Router();
const { createProduct , getAllProducts, deleteProduct, updateProduct} = require('../Controller/producController');

router.post('/uploadProduct', createProduct);

router.get('/product', getAllProducts);

router.delete('/:id',deleteProduct);

router.put('/:id',updateProduct);

module.exports = router;

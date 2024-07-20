const express = require('express');
const Controllers= require('../controllers/productController');

const productsrouter = express.Router();

productsrouter.get('/products', Controllers.getProducts);
productsrouter.post('/products', Controllers.createProduct);
productsrouter.put('/products/:id', Controllers.updateProduct);
productsrouter.delete('/products/:id', Controllers.deleteProduct);

module.exports = productsrouter;

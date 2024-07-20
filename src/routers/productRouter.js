const express = require('express');
const Controllers= require('../controllers/dashBoardController');

const productsrouter = express.Router();

productsrouter.get('/products', Controllers.findProducts);
productsrouter.post('/products', Controllers.addProduct);
productsrouter.put('/products/:id', Controllers.updateProduct);
productsrouter.delete('/products/:id', Controllers.deleteProduct);

module.exports = productsrouter;

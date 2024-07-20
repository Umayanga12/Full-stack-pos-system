const express = require('express');
const Controllers= require('../controllers/dashBoardController');

const router = express.Router();

// Authentication
router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.get('/users', Controllers.getUsers);
router.put('/users/:id', Controllers.updateUser);
router.delete('/users/:id', Controllers.deleteUser);

// Products
router.get('/products', Controllers.findProducts);
router.post('/products', Controllers.addProduct);
router.put('/products/:id', Controllers.updateProduct);
router.delete('/products/:id', Controllers.deleteProduct);

// Billing
router.post('/bills', Controllers.createBill);
router.get('/bills', Controllers.getBills);
router.delete('/bills/:id', Controllers.deleteBill);

// Sales Dashboard (Admin only)
router.get('/sales', Controllers.getSalesReport);

module.exports = router;

const express = require('express');
const Controllers= require('../controllers/billController');

const Billrouter = express.Router();

Billrouter.post('/bills', Controllers.createBill);
Billrouter.get('/bills', Controllers.getBills);
Billrouter.delete('/bills/:id', Controllers.deleteBill);

module.exports = Billrouter;
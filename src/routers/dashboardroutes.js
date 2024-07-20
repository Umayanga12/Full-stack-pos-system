const express = require('express');
const Controllers= require('../controllers/dashBoardController');

const Salesrouter = express.Router();

Salesrouter.get('/sales', Controllers.getSalesReport);

module.exports = Salesrouter;

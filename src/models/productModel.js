const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    stocks: Number,
    brand : String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
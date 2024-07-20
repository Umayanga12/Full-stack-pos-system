const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productID : String,
    productName: String,
    productPrice: Number,
    productQuantity: Number,
    productCategory: String,
    brand : String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
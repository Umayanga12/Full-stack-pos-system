const mongoose = require('mongoose');

const BrandDetails = new mongoose.Schema({
    brandID: String,
    brandName: String,
    brandAgentEmail: String,
    brandContact: Number,
});

const Brand = mongoose.model("brand",BrandDetails);
module.exports = Brand;
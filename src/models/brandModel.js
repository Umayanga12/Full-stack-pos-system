const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');
const BrandDetails = new mongoose.Schema({
    // brandID: uuidv4,
    brandName: String,
    brandAgentEmail: String,
    brandContact: Number,
});

const Brand = mongoose.model("brand",BrandDetails);
module.exports = Brand;
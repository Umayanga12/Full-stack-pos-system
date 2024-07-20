require('dotenv').config();
import productModel from '../models/productModel';

const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.send(products);
};

const createProduct = async (req, res) => {
    const product = new Product(req.body);
    await productModel.save();
    res.status(201).send(product);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(product);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await productModel.findByIdAndDelete(id);
    res.send('Product deleted successfully');
}

export {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}
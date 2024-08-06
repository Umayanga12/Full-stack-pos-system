require('dotenv').config();
import productModel from '../models/productModel';

const getProducts = async (req, res) => {
    const products = await productModel.find();
    res.send(products);
};

const createProduct = async (req, res) => {
    const product = new productModel(req.body);
    await product.save();
    res.status(201).send(product);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(product);
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({ error: 'Product not found' });
    }

    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


export {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}

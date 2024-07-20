import billModel from "../models/billModel";
import productModel from "../models/productModel";
require("dotenv").config();

const createBill = async (req, res) => {
    const { userId, items } = req.body;
    let total = 0;
    for (const item of items) {
        const product = await productModel.findById(item.productId);
        if (!product) return res.status(404).send('Product not found');
        if (product.stock < 1) return res.status(400).send('Out of stock');
        product.stock -= 1;
        await product.save();
        total += item.price;
    }
    const bill = new Bill({ userId, items, total });
    await billModel.save();
    res.status(201).send(bill);
};

const getBills = async (req, res) => {
    const bills = await billModel.find();
    res.send(bills);
};

const deleteBill = async (req, res) => {
    const { id } = req.params;
    await billModel.findByIdAndDelete(id);
    res.send('Bill deleted successfully');
}

export {
    createBill,
    getBills,
    deleteBill,
}
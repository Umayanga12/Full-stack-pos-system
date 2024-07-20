import brandModel from "../models/brandModel";

require("dotenv").config();

const getBrands = async (req, res) => {
    const brands = await brandModel.find();
    res.send(brands);
}

const createBrand = async (req, res) => {
    const brand = new brandModel(req.body);
    await brandModel.save();
    res.status(201).send(brand);
}

const updateBrand = async (req, res) => {
    const { id } = req.params;
    const brand = await brandModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(brand);
}

const deleteBrand = async (req, res) => {
    const { id } = req.params;
    await brandModel.findByIdAndDelete(id);
    res.send('Brand deleted successfully');
}

export {
    getBrands,
    createBrand,
    updateBrand,
    deleteBrand
}
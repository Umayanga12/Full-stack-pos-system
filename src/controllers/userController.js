import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import userModel from "../models/userModel";

require('dotenv').config();

const generateSecretKey = () => {
    return crypto.randomBytes(64).toString('hex');
};

const secretKey  = generateSecretKey();

//controlllers

const register = async (req, res) => {
    const { username, password, userid, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ username, password: hashedPassword, userid, type });
    await user.save();
    res.status(201).send(user);
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) return res.status(404).send('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');
    const token = jwt.sign({ userid: user.userid, type: user.type }, secretKey);
    res.send({ token });
};

const getUsers = async (req, res) => {
    const users = await userModel.find();
    res.send(users);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.send('User deleted successfully');
}


export{
    register,
    login,
    getUsers,
    updateUser,
    deleteUser
}
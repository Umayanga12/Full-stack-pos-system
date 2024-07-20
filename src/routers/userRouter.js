const express = require("express");
const Controllers = require("../controllers/userController");
const Userrouter = express.Router();

Userrouter.post('/register', Controllers.register);
Userrouter.post('/login', Controllers.login);
Userrouter.get('/users', Controllers.getUsers);
Userrouter.put('/users/:id', Controllers.updateUser);
Userrouter.delete('/users/:id', Controllers.deleteUser);

module.exports = Userrouter;
const express = require("express");
const Controllers = require("../controllers/userController");
const router = express.Router();

router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.get('/users', Controllers.getUsers);
router.put('/users/:id', Controllers.updateUser);
router.delete('/users/:id', Controllers.deleteUser);
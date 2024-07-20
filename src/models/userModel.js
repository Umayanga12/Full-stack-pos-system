const mongoose = require('mongoose');
const { v4: UUID } = require('uuid');

const userSchema = new mongoose.Schema({
    uuid : UUID(),
    username : String,
    password : String,
    type: String
});

const user = mongoose.model("user",userSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Email is invalid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    level: {
        type : Number, 
        default: 1
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;
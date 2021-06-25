const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    },
    password: {
        type: String,
        required: true
    },
    stories: [{
        type : Schema.Types.ObjectID, 
        ref: "Story"
    }]

});

const User = mongoose.model('User', userSchema);
module.exports = User;
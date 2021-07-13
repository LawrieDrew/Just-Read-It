const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    level: {
        type : Number, 
        default: 1
    },
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);

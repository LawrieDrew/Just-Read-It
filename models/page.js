const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const pageSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    keyword: {
        type: Array,
        required: true
    }
    
});

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
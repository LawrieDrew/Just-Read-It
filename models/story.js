const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const storySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        unique: true
    },
    pages: [{
        text: {
            type: String,
            required: true
        },
        keyword: {
            type: String,
            required: true
        }
    }]

});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
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
    pages: [{
        type: Schema.Types.ObjectId,
        ref: "Page"
    }]

});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
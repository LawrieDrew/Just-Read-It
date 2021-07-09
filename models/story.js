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
    page1: {
            type: String,
            required: true
        },
    page1Keyword: {
            type: String,
            required: true
        },
    page1options: [
        {
            type:String,
            required: true
        }
    ],
    page2: {
            type: String,
            required: true
        },
    page2Keyword: {
            type: String,
            required: true
        },
        page2options: [
            {
                type:String,
                required: true
            }
        ],
    page3: {
            type: String,
            required: true
        },
    page3Keyword: {
            type: String,
            required: true
        },
        page3options: [
            {
                type:String,
                required: true
            }
            
        ]

});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
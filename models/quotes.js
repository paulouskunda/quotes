const mongoose = require("mongoose")
const Schema = mongoose.Schema

const quoteShema = new Schema({
    author: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    quote_type:{
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: false,
    },
    value: {
        type: Number,
        required: true,
    }
}, {timestamps: true})

const Quote = mongoose.model('Quote', quoteShema)

module.exports = Quote
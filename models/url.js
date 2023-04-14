const mongoose = require("mongoose")
const shortId = require("shortid")

const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
        default: shortId.generate
    }
})
const model = mongoose.model("urlShortner", urlSchema)
module.exports = model
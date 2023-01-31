const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please provide title"]
    },
    desc: {
        type: String,
        required: [true, "please provide Desc"]
    },
    image: {
        type: String,
        required: [true, "please provide img url"]
    },
    Publish: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("blogs", blogSchema)
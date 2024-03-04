const { timeStamp } = require('console')
const mongoose = require('mongoose')

const add = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
},{
    timestamps: true 
})

const addBlog = mongoose.model("addBlog", add)


module.exports = addBlog
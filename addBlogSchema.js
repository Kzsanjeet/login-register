const mongoose = require('mongoose')

const add = mongoose.Schema({
    username:{type:String,required:true},
    title: { type: String, required: true },
    content: { type: String, required: true }
},{
    timestamps: true 
})

const addBlog = mongoose.model("addBlog", add)


module.exports = addBlog
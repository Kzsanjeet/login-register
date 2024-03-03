const mongoose = require('mongoose')

const register = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },   
  email: { type: String, required: true},
  password:{type: String, required: true}
  })

  const User = mongoose.model("User",register)


  module.exports = User


  
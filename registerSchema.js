const mongoose = require('mongoose')

const register = mongoose.Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },   
  Email: { type: String, required: true},
  password:{type: String, required: true}

  })

  const userRegister = mongoose.model("userRegister",register)


  module.exports = {userRegister}
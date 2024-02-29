const express = require('express')
const app = express()
const connectDB = require('./Dbconnection')
const router = require('./route')
require("dotenv").config()

connectDB()

port = 4000

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use(express.json())// middleware to read in json format
app.use('/',router)

app.listen(port,()=>{
    console.log(`Server is runnin on port ${port}`)
})

const express = require('express')
const  router = express.Router()
const {register,loginUser,addB,allBlogs} = require('./controller')
// const loginUser = require('./controller')


router.route('/register').post(register)
router.route('/login').post(loginUser)
router.route('/addBlog').post(addB)
router.route('/blogs').get(allBlogs)

module.exports = router;
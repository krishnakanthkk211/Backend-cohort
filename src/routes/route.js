const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel=require('../models/bookmodel')
const Bookcontroller=require('../controllers/bookcontroller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/createBook", Bookcontroller.createBook)
router.get("/getBooklist", Bookcontroller.getBookslist)

module.exports = router;
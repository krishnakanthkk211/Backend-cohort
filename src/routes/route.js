const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW = require ("../middleware/commonMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createuser", userController.createUser  )

router.post("/loginuser", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)
router.put("/deleteuser/:userId",commonMW.mid,userController.deleteUser)

module.exports = router;
const express = require('express');
const router = express.Router();
const {getHome, loginUser, postLogin, registerUser, postRegister} = require("../controller/user.cont")

router.get("/",getHome)
router.get("/login", loginUser)
router.post("/login", postLogin)
router.get("register", registerUser)
router.post("/register", postRegister)

module.exports = router
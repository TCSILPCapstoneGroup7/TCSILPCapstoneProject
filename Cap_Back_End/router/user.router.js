let express = require("express")

let router = express.Router()

let productController = require("../controller/user.controller")

router.post("/userSignIn", user.controller.login)
router.post("/userSignUp", user.controller.register)

module.exports = router
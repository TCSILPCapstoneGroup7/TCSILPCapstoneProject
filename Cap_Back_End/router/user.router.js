let express = require("express")

let router = express.Router()

let userController = require("../controller/user.controller")

router.post("/signIn", userController.signIn)
router.post("/signUp", userController.signUp)
router.get("/fetchUsers", userController.fetchUsers)

module.exports = router
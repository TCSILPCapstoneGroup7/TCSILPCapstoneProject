let express = require("express")

let router = express.Router()

let productController = require("../controller/product.controller")


router.post("/addProdRoute", productController.getNewProduct)

module.exports = router
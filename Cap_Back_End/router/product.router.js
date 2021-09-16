let express = require("express")

let router = express.Router()

let productController = require("../controller/product.controller")


router.post("/addProdRoute", productController.getNewProduct)
router.put("/updateProdRoute", productController.updateNewProduct)
router.post("/deleteProdRoute", productController.deleteNewProduct)
router.get("/viewRequest", productController.veiwReqCon)


module.exports = router
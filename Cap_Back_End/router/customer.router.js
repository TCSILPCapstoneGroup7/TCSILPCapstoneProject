let express = require("express")
let router = express.Router()

let customerController = require("../controller/customer.controller")

router.post("/updateCustomerDetails",customerController.updateCustInfo)

module.exports = router
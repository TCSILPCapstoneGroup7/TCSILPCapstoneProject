let express = require("express")
let router = express.Router()

let customerController = require("../controller/customer.controller")

router.post("/updateCustomerDetails",customerController.updateCustInfo)
router.post("/getCustomerInfo", customerController.getCustomerInfo)

module.exports = router 
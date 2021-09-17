let express = require("express")
let router = express.Router()

let customerController = require("../controller/customer.controller")

router.post("/updateCustomerDetails",customerController.updateCustInfo)
router.put("/getCustomerInfo", customerController.getCustomerInfo)
router.post("updateCustFunds", customerController.updateCustFunds)

module.exports = router 
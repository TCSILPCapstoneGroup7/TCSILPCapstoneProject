let express = require("express");
let router = express.Router();
let empController = require("./emp.controller");
let productRequestModel = require("./productRequest.model");


router.post("/sendRequest", empController.sendRequest);
router.post("/showOrders", empController.showOrders);
router.post("/updateStatus", empController.updateStatus);
router.post("/showTickets", empController.showTickets);
router.post("/unlockAccount", empController.unlockAccount);
router.post("/editEmpPass", empController.editEmpPass);

module.exports=router;
let express = require("express");
let router = express.Router();
let empController = require("../controller/emp.controller");


router.post("/sendRequest", empController.sendRequest);
router.get("/showOrders", empController.showOrders);
router.post("/updateStatus", empController.updateStatus);
router.get("/showTickets", empController.showTickets);
router.post("/unlockAccount", empController.unlockAccount);
router.post("/editEmpPass", empController.editEmpPass);
router.post("/showOrdersSelect",empController.showOrdersSelect)

module.exports=router;
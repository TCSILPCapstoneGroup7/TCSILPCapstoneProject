let express = require("express");
let router = express.Router();
let empController = require("./emp.controller");

router.post("/sendRequest", empController.sendRequest);
router.post("/showOrders", empController.showOrders);
router.post("/updateStatus", empController.updateStatus);
router.post("/showTickets", empController.showTickets);
router.post("/unlockAccount", empController.unlockAccount);
router.post("/editEmpPass", empController.editEmpPass);

//TESTING ROUTER
// router.post("/sendRequest", function (req, res) {
//     console.log('SendRequest Route');
// })

// router.post("/showOrders", function (req, res) {
//     console.log('ShowOrders Route');
// });

// router.post("/updateStatus", function (req, res) {
//     console.log('updateStatus Route');
// });

// router.post("/showTickets", function (req, res) {
//     console.log('showTickets Route');
// });

// router.post("/unlockAccount", function (req, res) {
//     console.log('unlock Account Route');
// });

// router.post("/editEmpPass", function (req, res) {
//     console.log('edit Emp Pass Route');
// });

module.exports=router;
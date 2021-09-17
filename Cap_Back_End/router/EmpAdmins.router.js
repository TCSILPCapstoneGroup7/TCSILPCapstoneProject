let express = require("express")

let router = express.Router()

let empAdminController = require("../controller/EmpAdmins.controller")

router.post("/getEmpInfo", empAdminController.getEmpInfo);
router.post("/signUp", empAdminController.signUp);
router.post("/deleteEmployee", empAdminController.deleteEmployee);

module.exports = router
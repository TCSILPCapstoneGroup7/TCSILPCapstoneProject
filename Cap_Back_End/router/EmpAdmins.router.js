let express = require("express")

let router = express.Router()

let empAdminController = require("../controller/EmpAdmins.controller")

router.post("/getEmpInfo", empAdminController.getEmpInfo);
router.post("/empSignIn",empAdminController.loginEmp)


module.exports = router
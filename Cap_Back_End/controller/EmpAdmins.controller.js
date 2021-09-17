let empAdmModel = require("../mdoel/EmpAdmins.model");

let getEmpInfo = ((request,response)=>{
    empID= request.body;
    empAdmModel.find({empID},(err,info)=>{
        if(!err){
            console.log("FIND RESULTS..."+ JSON.stringify(info))
            response.json(info)
        }else{
            console.log("find error.."+err)
        }
    })
})


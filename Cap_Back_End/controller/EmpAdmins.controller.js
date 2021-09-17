
const { response, request } = require("express");

let empAdmModel = require("../model/EmpAdmins.model");

let getEmpInfo = (request,response)=>{
    empID= request.body;
    empAdmModel.find({empID},(err,info)=>{
        if(!err){
            //if(inAdmin.includes("ADM")){}
            console.log("FIND RESULTS..."+ JSON.stringify(info))
            response.json(info)
        }else{
            console.log("find error.."+err)
        }
    })
}

let loginEmp = async (request,response)=>{
    empBody= request.body;
    
    empInfo = await empAdmModel.findOne({empBody})
    
    if(empInfo !== null){
        if(empBody.Emp_Type == "admin"){
            response.send("successful admin login")
        }else if(empBody.Emp_Type == "employee"){
            response.send("successful employee login")
        }
    }else{
        response.send("user not found")
    }
    
}

let signUp = async(request, response)=>{
    let employee = request.body;

    let employeeData = await empAdmModel.create(employee, (err, result)=>{
        if (!err){
            console.log(result);
            response.send("Success");
        }
        else{
            console.log("Failed to register!");
        }
    })
}

let deleteEmployee = async(request, response)=>{
    let refID = request.body;

    let result = await empAdmModel.deleteOne({email:refID.email});

    if(result != null){
        console.log(result);
        response.send("Success");
    }
    else{
        console.log("Failed to delete!");
    }
}

module.exports = {getEmpInfo, signUp, deleteEmployee, loginEmp};

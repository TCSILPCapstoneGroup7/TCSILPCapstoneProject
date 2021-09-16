let userModel = require("../model.userModel")

let login = async(req, res)=>{
    let userData = await userModel.findOne({})
}

let register = async(req, res)=>{
    let userData = await userModel({})
}
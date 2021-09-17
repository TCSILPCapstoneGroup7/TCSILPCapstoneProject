
let userModel = require("../model/user.model");

let signUp = async (request,response)=> {
    let user = request.body;

    userModel.create(user, (result)=>{
        if(user.password == user.cPassword){
            console.log(result);
            response.send("Success");
        }
        else{
            console.log("Failed to register!");
            response.send("Failed to register!");
        }
    })    
}
let signIn = async (request,response)=> {
    let user = request.body;
    let userInfo = await userModel.findOne({userID:user.userID,password:user.password});
    if(userInfo!=null){
        if(userInfo.unlocked<=3){
            response.send("Success");      
        }
        else{
            response.send("Account locked!");
        }
    }else {
        let attempt = await userModel.findOne({userID:user.userID})
        if (attempt!=null){
            await userModel.updateOne({userID:user.userID},{$set: {unlocked: attempt.unlocked + 1}});
        }
        response.send("Wrong Credentials! " + (2 - attempt.unlocked) + " attempts remaining!");
    }
}

let fetchUsers = ()=>{
    userModel.find({}, (err, data)=>{
        if(!err){
            console.log(data);
            response.send(data);
        }
        else{
            console.log(err);
            response.send(err);
        }
    })
}

module.exports={signIn,signUp,fetchUsers}
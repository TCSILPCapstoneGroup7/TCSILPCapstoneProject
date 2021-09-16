
let userModel = require("../model/user.model");

let signUp = async (request,response)=> {
    let user = request.body;

    userModel.insertMany(user, (result)=>{
        if(user.password == user.cPassword){
            console.log(result);
            response.send("Success");
        }
        else{
            console.log("Failed to register!");
        }
    })    
}
let signIn = async (request,response)=> {
    let user = request.body;
    let userInfo = await userModel.findOne({email:user.email,password:user.password});
    if(userInfo!=null){
        if(userInfo.unlocked<=3){
            response.send("Success");      
        }
        else{
            response.send("Account locked!");
        }
    }else {
        let attempt = await userModel.findOne({email:user.email})
        if (attempt!=null){
            await userModel.updateOne({email:user.email},{$set: {unlocked: attempt.unlocked + 1}});
        }
        response.send("Wrong Credentials! " + (2 - attempt.unlocked) + " attempts remaining!");
    }
}

module.exports={signIn,signUp}
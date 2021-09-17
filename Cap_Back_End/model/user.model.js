let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    unlocked:{type:Number},
    funds:{type:Number},
    firstName:{type:String},
    lastName:{type:String},
    dob:{type:String},
    phone:{type:Number},
    street:{type:String},
    city:{type:String},
    state:{type:String},
    zip:{type:Number},
    email:{type:String},
    password:{type:String},
    cPassword:{type:String} 
})

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;
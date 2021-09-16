let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    unlocked:{type:Boolean},
    firstName:{type:String},
    lastName:{type:String},
    dob:{type:String},
    phone:{type:Number},
    address:{type:String},
    email:{type:String},
    password:{type:String},
    cPassword:{type:String}
})

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;
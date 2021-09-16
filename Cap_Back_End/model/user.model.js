let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    _id:Number,
    unlocked:Boolean,
    firstName:String,
    lastName:String,
    dob:String,
    phone:Number,
    address:String,
    email:String,
    password:String,
    cPassword:String
})

let userModel = mongoose.model("user", userSchema);

module.export = userModel;
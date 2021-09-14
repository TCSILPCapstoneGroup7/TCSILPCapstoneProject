// load the module 
// let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let orderStatusSchema = mongoose.Schema({
    ordernum: String,
    orderstatus: String,
    statusDesc: String
    
});

// using schema creating model 
let orderStatusModel = mongoose.model("OrderStatus", orderStatusSchema);

module.exports = orderStatusModel;    // we can import using require.
                                // in anothe file
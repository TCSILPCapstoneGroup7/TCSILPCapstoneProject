// load the module 
// let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let orderListSchema = mongoose.Schema({
    ordernumber: String,
    currentstatus: String,
    description: String
});

// using schema creating model 
let orderListModel = mongoose.model("OrderList", orderListSchema);

module.exports = orderListModel;    // we can import using require.
                                // in anothe file
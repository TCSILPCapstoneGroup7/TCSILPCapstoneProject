// load the module 
// let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let accountSchema = mongoose.Schema({
    accountnum: String,
    accountstatus: String
});

// using schema creating model 
let accountModel = mongoose.model("Accounts", accountSchema);

module.exports = accountModel;    // we can import using require.
                                // in anothe file
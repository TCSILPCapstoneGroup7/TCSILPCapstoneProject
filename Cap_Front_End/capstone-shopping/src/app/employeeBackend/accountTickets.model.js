
// load the module 
let mongoose = require("mongoose");

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let accountTicketsSchema = mongoose.Schema({
    custAccNum: Number,
    unlockReason: String
});

// using schema creating model 
let accountTicketsModel = mongoose.model("AccountTickets", accountTicketsSchema);

module.exports = accountTicketsModel;    // we can import using require.
                                // in anothe file

// load the module 
// let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let customersSchema = mongoose.Schema({
    userID: Number,
    userStatus: Boolean,
    firstName: String,
    lastName: String,
    dob: Date,
    street: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number,
    email: String,
    password: String,
    cPassword: String
});

// using schema creating model 
let customersModel = mongoose.model("Customers", customersSchema);

module.exports = customersModel;    // we can import using require.
                                // in anothe file
// load the module 
// let mongoose = require("mongoose");

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let EmpAdminsSchema = mongoose.Schema({
    Emp_ID: Number,
    Emp_type: String,
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
let EmpAdminsModel = mongoose.model("EmpAdmins", EmpAdminsSchema);

module.exports = EmpAdminsModel;    // we can import using require.
                                // in anothe file
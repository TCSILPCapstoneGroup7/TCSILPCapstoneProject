// load the module 
let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let productRequestSchema = mongoose.Schema({
    prodName: String,
    quantityincrease: Number
});

// using schema creating model 
let productRequestModel = mongoose.model("ProductRequest", productRequestSchema);

module.exports = productRequestModel;    // we can import using require.
                                // in anothe file

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let productsSchema = mongoose.Schema({
    _id:String,
    prodName: String,
    prodPrice: String,
    prodQuantity: String,

});

// using schema creating model 
let productsModel = mongoose.model("Products", productsSchema);

module.exports = productsModel;    // we can import using require.
                                // in anothe file
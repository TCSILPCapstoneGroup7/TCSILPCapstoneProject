let mongoose = require("mongoose")
mongoose.pluralize(null)

let productSchema = mongoose.Schema({
    prodName:{type:String},
    prodPrice:{type:String},
    prodQuantity:{type:String}
})

let productModel = mongoose.model("product", productSchema)

module.exports = productModel;
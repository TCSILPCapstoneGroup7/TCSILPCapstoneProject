let mongoose = require("mongoose")
let autoIn = require("mongoose-sequence")(mongoose)

mongoose.pluralize(null)


let productSchema = mongoose.Schema({
    _id:Number,
    prodName:{type:String,require:true},
    prodPrice:{type:String,require:true},
    prodQuantity:{type:String,require:true}
},{_id:false});

productSchema.plugin(autoIn)
//productSchema.plugin(autoIn.plugin,'_id')
let productModel = mongoose.model("product", productSchema)

module.exports = productModel;
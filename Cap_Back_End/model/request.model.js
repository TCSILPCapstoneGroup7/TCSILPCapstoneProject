let mongoose = require("mongoose")
let autoIn = require("mongoose-sequence")(mongoose)

mongoose.pluralize(null)


let RequestSchema = mongoose.Schema({
    _id:Number,
    //requestID:{type:String,require:true}, should this be entered or auto generated
    requestType:{type:String,require:true},
    prodQuantity:{type:String,require:true}
},{_id:false});

productSchema.plugin(autoIn)
//productSchema.plugin(autoIn.plugin,'_id')
let productModel = mongoose.model("product", productSchema)

module.exports = productModel;
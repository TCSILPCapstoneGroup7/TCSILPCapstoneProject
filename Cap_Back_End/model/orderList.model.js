let mongoose = requrie("mongoose");
let productsSchema = require("./product.model");


mongoose.pluralize(null);

let orderListSchema = mongoose.Schema({
    ordernumber: String,
    custAccNum: Number,
    productArray: [productsSchema],
    orderTotalPrice: Number,
    orderStatus: { type: String, enum: ["Shipped", "Out for Delivery", "Delivered", "Cancelled"] },
    statusDesc: String


})
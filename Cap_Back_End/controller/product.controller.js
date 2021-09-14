let productModel = require("../model/product.model")

let getNewProduct = ((request,response)=>{
    let product = request.body
    
    productModel.insertMany(product, (err,results)=>{
        if(!err){
            console.log("getNewProdcut results..."+results)
        }else{
            console.log("error.."+err)
        }
    })
})

let updateNewProduct = ((request,response)=>{
    let product = request.body
    
    productModel.updateOne({_id:product._id},{$set:{prodPrice:product.updateProdPrice}}, (err,results)=>{
        if(!err){
            console.log("getNewProdcut results..."+results)
        }else{
            console.log("error.."+err)
        }
    })
})


module.exports = {getNewProduct,updateNewProduct}
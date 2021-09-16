let productModel = require("../model/product.model")

let getNewProduct = ((request,response)=>{
    let product = request.body
    
    /* productModel.insertMany(product, (err,results)=>{
        if(!err){
            console.log("getNewProdcut results..."+JSON.stringify(results))
        }else{
            console.log("error.."+err)
        }
    }) */
    productModel.create(product, (err,results)=>{
        if(!err){
            console.log("getNewProdcut results..."+JSON.stringify(results))
        }else{
            console.log("error.."+err)
        }
    })
})

let updateNewProduct = ((request,response)=>{
    let product = request.body
    
    productModel.updateOne({
        prodPrice:product.updateProdPrice
        },
        {$set:
            {prodQuantity:product.updateProdQuantity}
        }, 
        (err,results)=>{
        if(!err){
            console.log("updateNewProdcut results..."+ JSON.stringify(results))
        }else{
            console.log("error.."+err)
        }
    })
})

let deleteNewProduct = ((request,response)=>{
    //let product = request.params.delprodId
    let product = request.body  
    
    productModel.deleteOne({_id:product.delprodId},(err,results)=>{
        if(!err){
            console.log("delNewProdcut results..."+ JSON.stringify(results))
            console.log("this is dell request..."+JSON.stringify(product.delprodId))
        }else{
            console.log("error.."+err)
        }
    })
})

let veiwReqCon = ((request,response)=>{
    productModel.find({},(err,info)=>{
        if(!err){
            console.log("FIND RESULTS..."+ JSON.stringify(info))
            response.json(info)
        }else{
            console.log("find error.."+err)
        }
    })
})


module.exports = {getNewProduct,updateNewProduct,deleteNewProduct,veiwReqCon}
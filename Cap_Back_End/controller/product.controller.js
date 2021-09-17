let productModel = require("../model/product.model")

const getNewProduct =  async (request,response)=>{
    let product = request.body

    const getMyProduct = await productModel.findOne({prodName:product.prodName});
    if(getMyProduct == null){
        const addResult = await productModel.create(product)
        response.send("add working...")
    }else{
        response.send("add erroer...")
    }
    
}

let updateNewProduct = async (request,response)=>{
    let product = request.body
    
    const getMyProduct = await productModel.findOne({_id:product.updateProdId});

    if(getMyProduct !== null){
        if(product.updateProdPrice == "" ){
            const updateQ = await productModel.updateOne({_id:product.updateProdId},{$set:{prodQuantity:product.updateProdQuantity}})
        }else if(product.updateProdQuantity == "" ){
            const updateP = await productModel.updateOne({_id:product.updateProdId},{$set:{prodPrice:product.updateProdPrice}})
        }else if (product.updateProdQuantity!== "" && product.updateProdPrice !== "" ){
            const updateBoth = await productModel.updateOne({_id:product.updateProdId},{$set:{prodPrice:product.updateProdPrice,prodQuantity:product.updateProdQuantity}})
        }
        response.send("update working...")

    }else{
        response.send("update not...")

        
    }
}

let deleteNewProduct = async (request,response)=>{
    //let product = request.params.delprodId
    let product = request.body 
    
    const getMyProduct = await productModel.findOne({_id:product.delprodId});

    if(getMyProduct !== null){
        const deleteResults = await productModel.deleteOne({_id:product.delprodId})
        response.send("delete working...")
    }else{
        response.send("delete not working...")

    }

}

/* let veiwReqCon =  (request,response)=>{
     
    productModel.find({},(err,info)=>{
        if(!err){
            response.json(info)
        }else{
            console.log("find error.."+err)
        }
    })
} */


module.exports = {getNewProduct,updateNewProduct,deleteNewProduct}//,veiwReqCon}
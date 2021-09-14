let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
let cors = require("cors")
let productRouter = require("./router/product.router")

let app = express()

app.use(cors())
app.use(bodyParser.json())


let dbURL = "mongodb://localhost:27017/ShoppingDB"

mongoose.connect(dbURL).then(res=>console.log("this is db res..."+res)).catch(err=>console.log("this is db err..."+err))

app.use("/api/product", productRouter)

app.listen(9090,()=>console.log("server is running on 9090..."))
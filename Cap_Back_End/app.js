let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
//let autoIn = require("mongoose-auto-increment")
let cors = require("cors")
let productRouter = require("./router/product.router")
let empRouter = require("./router/emp.router");
let userRouter = require("./router/user.router")

let app = express()

app.use(cors())
app.use(bodyParser.json())

let dbURL = "mongodb://localhost:27017/ShoppingDB"

mongoose.connect(dbURL).then(res=>console.log("this is db res..." + res)).catch(err=>console.log("this is db err..."+err))
//autoIn.initialize(connect)

app.use("/api/product", productRouter)
app.use("/api/employee", empRouter); 
app.use("/api/user", userRouter)

app.listen(9090,()=>console.log("server is running on 9090..."))
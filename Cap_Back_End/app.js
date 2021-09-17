let express = require("express")
let bodyParser = require("body-parser")
let mongoose = require("mongoose")
//let autoIn = require("mongoose-auto-increment")
let cors = require("cors")
let productRouter = require("./router/product.router")
let userRouter = require("./router/user.router")
let customerRouter= require("./router/customer.router")
const { application } = require("express")

let app = express()

app.use(cors())
app.use(bodyParser.json())

let dbURL = "mongodb+srv://<server>:<123>@shoppingdb.jzwm5.mongodb.net/ShoppingDB?retryWrites=true&w=majority"

mongoose.connect(dbURL).then(res=>console.log("this is db res..."+ res)).catch(err=>console.log("this is db err..."+err))
//autoIn.initialize(connect)

app.use("/api/product", productRouter)

app.use("/api/user", userRouter)

app.use("/api/customer",customerRouter)

app.listen(9090,()=>console.log("server is running on 9090..."))
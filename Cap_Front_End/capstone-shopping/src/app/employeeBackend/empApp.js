let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let empRouter = require("./emp.router");


let app = express();

app.use(cors());
app.use(bodyParser.json());

let url = "mongodb://localhost:27017/tcsmean"

//mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));


app.use("", empRouter);


app.listen(9090, ()=>console.log("Server running on port number 9090"));
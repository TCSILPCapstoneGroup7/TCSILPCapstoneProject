//include all needed model files here
let productRequestModel = require("./productRequest.model");

let sendRequest = async (request, response) => {
    let prodReq = request.body;
    productRequestModel.insertMany(prodReq);
    response.send("Success");
}

let showOrders = async (request, response) => {

}

let updateStatus = async (request, response) => {

}

let showTickets = async (request, response) => {

}

let unlockAccount = async (request, response) => {

}

let editEmpPass = async (request, response) => {

}
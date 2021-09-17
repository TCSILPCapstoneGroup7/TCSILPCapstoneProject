//include all needed model files here
let productRequestModel = require("../model/productRequest.model");
let orderListModel = require('../model/orderList.model');
let accountTicketsModel = require('../model/accountTickets.model');
let customersModel = require('../model/customers.model');
let EmpAdminsModel = require('../model/EmpAdmins.model');

let sendRequest = async (request, response) => {
    console.log("sendRequestroutercontroller")
    let prodReq = request.body;
    productRequestModel.insertMany(prodReq);
    response.send("Success");
}

let showOrders = async (request, response) => {

    let orders = orderListModel.find({}, (err, data) => {
      if (!err) {
          //response.send(data);
      } else {
        //response.send("err");
      }
    })
    response.send(orders);
}

let showOrdersSelect = ((request, response) => {
    let temp =request.body

     orderListModel.find({custAccNum:temp.userID}, (err, data) => {
      if (!err) {
          response.send(data);
      } else {
        response.send("err");
      }
    })
    
})

//CHECK IF UPDATE STATUS REFUNDS MONEY TO USER

let updateStatus = async (request, response) => {

    let statusupdate = request.body;
    console.log(statusupdate);
    orderListModel.updateOne({ ordernum: statusupdate.ordernum }, { $set: { orderStatus: statusupdate.orderstatus, statusDesc: statusupdate.statusDesc } }, (err, result) => {
        if (!err) {
            console.log("Order Status updated.");
        } else {
            console.log(err);
        }
        })

    if( statusupdate.orderstatus == "Cancelled"){
        let cancelled_order = orderListModel.find({ ordernum: statusupdate.ordernum }, (err, result) => {
            if (!err) {
                console.log("Cancelled order found.");
            } else {
                console.log(err);
            }
        })
        let refund = -1 * cancelled_order.orderTotalPrice;
        customersModel.findOneAndUpdate({userID: cancelled_order.custAccNum}, {$inc: {funds: refund }});

    }
    // Implement logic to refund amount of order when Order Status is Cancelled
}

// same problem as
let showTickets = async (request, response) => {
    accountTicketsModel.find({}, (err, data) => {
        if (!err) {
            response.send(data);
        } else {
            response.send("err");
        }
    })
}

let unlockAccount = async (request, response) => {

    let acc = request.body;
    customersModel.updateOne({ userID: acc.accountnum }, { $set: { unlocked: true } }, (err, result) => {
        if (!err) {
            console.log("Account Unlocked.");
            response.send('Success');
        } else {
            console.log(err);
            response.send('Error');
        }
    })
}

let editEmpPass = async (request, response) => {

    let passchange = request.body;
    var curEmp;
    EmpAdminsModel.find({ Emp_ID: passchange.empID }, (err, data) => {
      if (!err) {
        console.log(data);
        console.log(passchange.curpass);
        curEmp = data;

          if (curEmp[0].password == passchange.curpass) {
              if (passchange.newpass == passchange.confirmnewpass) {
                  EmpAdminsModel.updateOne({ Emp_ID: curEmp[0].Emp_ID }, { $set: { password: passchange.newpass, cPassword: passchange.confirmnewpass } }, (err, result) => {
                      if (!err) {
                          console.log("Password Updated.");
                          response.send('Success');
                      } else {
                          console.log(err);
                      }
                  })
              }
          }
      } else {
        console.log(err);
      }
    })

    
}

module.exports = { sendRequest, showOrders, updateStatus, showTickets, unlockAccount, editEmpPass, showOrdersSelect };
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from './emp.service';

@Component({
  selector: 'a1pp-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public EmpSer: EmpService,
    public router:Router){ }

  ngOnInit(): void { }

  requestRef = new FormGroup({
    prodName: new FormControl(""),
    quantityincreased: new FormControl("")
  })
  requestMsg?:String;

  statusUpdateRef = new FormGroup({
    ordernum: new FormControl(""),
    orderstatus: new FormControl(""),
    statusDesc: new FormControl("")
  })
  statusMsg?:String;

  unlockAccountRef = new FormGroup({
    accountnum: new FormControl("")
  })
  unlockMsg?:String;

  emppassRef = new FormGroup({
    empID: new FormControl(""),
    curpass: new FormControl(""),
    newpass: new FormControl(""),
    confirmnewpass: new FormControl("")
  })
  empPassMsg?:String;

  public empLogout() {
    console.log("empLogout");
    // implement backtrack to signin page for empLogout
  }

  sendRequest(): any {
    console.log("sendRequest");
    
    let request = this.requestRef.value;
    this.EmpSer.sendRequestSer(request).subscribe(result=>{
      if(result=='Success'){
        this.requestMsg = "Product Request sent."
      }
      else{
        this.requestMsg = "Product Request not sent."
      }
    })
    this.router.navigate(["sendRequest"]);
  }

  showOrders() {
    console.log("showOrders");

    this.EmpSer.showOrdersSer(request).subscribe(result => {
      if (result == 'Success') {
        this.requestMsg = "Orders sent."
      }
      else {
        this.requestMsg = "Orders not sent."
      }
    })
    this.router.navigate(["showOrders"]);

    // IMPLEMENT
    
    // var orderslist = orderListModel.find({}, (err, data) => {
    //   if (!err) {
    //     let oL = document.getElementById("orderslist");
    //     if( oL != null){
    //       oL.innerHTML = data;
    //     }
    //   } else {
    //     console.log(err);
    //   }
    // })
  }

  updateStatus() {
    console.log("updateStatus");
    
    let statusupdate = this.statusUpdateRef.value;
    this.EmpSer.updateStatusSer(statusupdate).subscribe(result => {
      if (result == 'Success') {
        this.statusMsg = "Status Updated."
      }
      else {
        this.statusMsg = "Status not updated."
      }
    })

    // orderListModel.updateOne({ ordernum: statusupdate.ordernum }, { $set: { orderstatus: statusupdate.orderstatus, statusDesc: statusupdate.statusDesc } }, (err, result) => {
    //   if (!err) {
    //     console.log("Order Status updated.");
    //   } else {
    //     console.log(err);
    //   }
    // })
  }

  showTickets(){
    console.log("showTickets");

    // IMPLEMENT


  }

  unlockAccount() {
    console.log("unlockAccount");

    let acc = this.unlockAccountRef.value;
    this.EmpSer.unlockAccountSer(acc).subscribe(result => {
      if (result == 'Success') {
        this.unlockMsg = "Account Unlocked."
      }
      else {
        this.unlockMsg = "Account Not Unlocked."
      }
    })
    // customersModel.updateOne({ userID: acc.accountnum }, { $set: { unlocked: true} }, (err, result) => {
    //   if (!err) {
    //     console.log("Account Unlocked.");
    //   } else {
    //     console.log(err);
    //   }
    // })
  }

  editEmpPass() {
    console.log("editEmpPass");
    let passchange = this.emppassRef.value;
    this.EmpSer.editEmpPassSer(passchange).subscribe(result => {
      if (result == 'Success') {
        this.empPassMsg = "Password Updated."
      }
      else {
        this.empPassMsg = "Password Not Updated."
      }
    })
    // let curEMP = EmpAdminsModel.find({ Emp_ID: passchange.empID} , (err, data) => {
    //   if (!err) {
    //     console.log(data);
    //     curEMP = data;
    //   } else {
    //     console.log(err);
    //   }
    // })

    // if( curEMP.password == passchange.curpass){
    //   if(passchange.newpass == passchange.confirmnewpass){

    //     EmpAdminsModel.updateOne({ empID: curEMP.empID }, { $set: { password: passchange.newpass, cPassword: passchange.confirmnewpass } }, (err, result) => {
    //       if (!err) {
    //         console.log("Password Updated.");
    //       } else {
    //         console.log(err);
    //       }
    //     })
    //   }
    // }

  }

}

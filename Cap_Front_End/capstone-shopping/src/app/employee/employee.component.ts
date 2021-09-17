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
    quantityincreased: new FormControl(""),
    requestDesc: new FormControl("")
  })

  statusUpdateRef = new FormGroup({
    ordernum: new FormControl(""),
    orderstatus: new FormControl(""),
    statusDesc: new FormControl("")
  })

  unlockAccountRef = new FormGroup({
    accountnum: new FormControl("")
  })

  emppassRef = new FormGroup({
    empID: new FormControl(""),
    curpass: new FormControl(""),
    newpass: new FormControl(""),
    confirmnewpass: new FormControl("")
  })

  public empLogout() {
    console.log("empLogout");
    // implement backtrack to signin page for empLogout
  }

  sendRequest(): any {
    console.log("sendRequest");
    
    let request = this.requestRef.value;
    this.EmpSer.sendRequestSer(request).subscribe(result=>{
      if(result=='Success'){
        console.log("Product Request sent.");
      }
      else{
        console.log("Product Request not sent.");
      }
    })
    this.router.navigate(["sendRequest"]);
  }


  // IMPLEMENT HTML TABLE
  showOrders() {
    console.log("showOrders");

    this.EmpSer.showOrdersSer().subscribe(result => {
      if (result != 'err') {
        
        let oL = document.getElementById("orderslist");
        if (oL != null) {
          var tableContent: string = "";
          var headerTable: string = "<table border=1 style= 'margin: auto'> <tr> <th>Order Number</th> <th>Customer Acc Num</th> <th>Order Total Price</th> <th>Order Status</th> <th>Description</th> </tr>";
          
          let data = result;
          console.log(data);
          if (data != null) {
            data.forEach((element:any) => {
              tableContent = tableContent + "<tr><td>" + element.ordernumber + "</td><td>" + element.custAccNum + "</td><td>" + element.orderTotalPrice + "</td><td>" + element.orderstatus + "</td><td>" + element.statusDesc + "</td></tr>";
            });
          }

          var endTable = "</table>";

          tableContent = headerTable + tableContent + endTable;
          oL.innerHTML = tableContent; 
        }
      }
      else {
        console.log("Orders not displayed.");
      }
    })

    this.router.navigate(["showOrders"]);
  }
    

  updateStatus() {
    console.log("updateStatus");
    
    let statusupdate = this.statusUpdateRef.value;
    this.EmpSer.updateStatusSer(statusupdate).subscribe(result => {
      if (result == 'Success') {
        console.log("Status Updated.");
      }
      else {
        console.log("Status not updated.");
      }
    })

    this.router.navigate(["updateStatus"]);

  }

  //implement HTML TABLE

  showTickets(){
    console.log("showTickets");

    this.EmpSer.showTicketsSer().subscribe(result => {
      if (result != 'err') {

        let sT = document.getElementById("ticketstable");
        if (sT != null) {
            var tableContent: string = "";
            var headerTable: string = "<table border=1 style= 'margin: auto'> <tr> <th>Order Number</th> <th>Customer Acc Num</th> <th>Order Total Price</th> <th>Order Status</th> <th>Description</th> </tr>";

            let data = result;
            if (data != null) {
              data.forEach((element: any) => {
                tableContent = tableContent + "<tr><td>" + element.ordernumber + "</td><td>" + element.custAccNum + "</td><td>" + element.orderTotalPrice + "</td><td>" + element.orderstatus + "</td><td>" + element.statusDesc + "</td></tr>";
              });
            }

            var endTable = "</table>";

            tableContent = headerTable + tableContent + endTable;
            sT.innerHTML = tableContent;
        }
      }
      else {
        console.log("Tickets not displayed.");
      }
    })

    this.router.navigate(["showTickets"]);

  }

  unlockAccount() {
    console.log("unlockAccount");

    let acc = this.unlockAccountRef.value;
    this.EmpSer.unlockAccountSer(acc).subscribe(result => {
      if (result == 'Success') {
        console.log("Account Unlocked.");
      }
      else {
        console.log("Account Not Unlocked.");
      }
    })
    this.router.navigate(['unlockAccount']);
  }

  editEmpPass() {
    console.log("editEmpPass");
    let passchange = this.emppassRef.value;
    this.EmpSer.editEmpPassSer(passchange).subscribe(result => {
      if (result == 'Success') {
        console.log("Password Updated.");
      }
      else {
        console.log("Password Not Updated.");
      }
    })

  this.router.navigate(['editEmpPass']);
  }

}

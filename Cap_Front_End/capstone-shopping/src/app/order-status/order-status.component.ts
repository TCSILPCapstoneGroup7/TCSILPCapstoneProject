import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from '../employee/emp.service';



@Component({
  selector: 'order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  // form = this.fb.group({
  //   orders: this.fb.array([])
  // })

  constructor(private fb:FormBuilder, public router:Router, public empServ:EmpService) { }

  // get orders(){
  //   return this.form.controls["orders"] as FormArray;
  // }


  ngOnInit(): void {
    console.log("showOrders");
    let obj= {
      userID:10
    }

    this.empServ.showOrderSelectSer(obj).subscribe(result => {
      if (result != 'err') {
        
        let oL = document.getElementById("orderslist");
        if (oL != null) {
          var tableContent: string = "";
          var headerTable: string = "<table border=1 style= 'margin: auto;'> <tr> <th style>Order Number</th></th>  <th>Order Status</th> <th>Description</th> </tr>";
          
          let data = result;
          console.log(data);
          if (data != null) {
            data.forEach((element:any) => {
              tableContent = tableContent + "<tr><td>" + element.ordernumber + "</td><td>" + element.orderstatus + "</td><td>" + element.statusDesc + "</td></tr>";
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

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(public fBuild:FormBuilder, public router:Router, public adminServ:AdminService) { }

  testMsg?:string;

  addForm = this.fBuild.group({
    prodName:[''],
    prodPrice:[''],
    prodQuantity:[''],
  })

  ngOnInit(): void {
  }

  addProduct():any{
    let addArray = this.addForm.value
    console.log("this is the name.." + addArray.prodName)
    this.adminServ.addProdServ(addArray).subscribe(result=>{
      if(result == "add working..."){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["addProdRoute"]) 
  }
}

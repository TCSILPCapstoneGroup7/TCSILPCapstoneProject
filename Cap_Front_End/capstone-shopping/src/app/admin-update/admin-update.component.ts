import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  constructor(public fBuild:FormBuilder, public router:Router, public adminServ:AdminService) { }

  testMsg?:string;

  updateForm = this.fBuild.group({
    updateProdId:[''],
    updateProdPrice:[''],
    updateProdQuantity:[''],
  })

  ngOnInit(): void {
  }

  updateProduct():any{
    let updateArray = this.updateForm.value
    console.log("this is the name.." + updateArray.updateProdPrice)
    
    this.adminServ.updateProdServ(updateArray).subscribe(result=>{
      if(result == "update working..."){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["updateProdRoute"]) 
  }

}

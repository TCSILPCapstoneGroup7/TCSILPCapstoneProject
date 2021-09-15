import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(public fBuild:FormBuilder, public router:Router, public adminServ:AdminService) { }
  
  testMsg?:string;

  addForm = this.fBuild.group({
    prodName:[''],
    prodPrice:[''],
    prodQuantity:[''],
  })

  deleteForm = this.fBuild.group({
    delprodId:['']
  })
  
  updateForm = this.fBuild.group({
    updateProdId:[''],
    updateProdPrice:[''],
    updateProdQuantity:[''],
  })

  ngOnInit(): void {
  }

  addProduct():any{
    let addArray = this.addForm.value
    console.log("this is the name.." + addArray.prodName)
    this.adminServ.addProdServ(addArray).subscribe(result=>{
      if(result == "Success"){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    
    
    this.router.navigate(["addProdRoute"]) 
  }
  deleteProduct():any{
    let deleteArray = this.deleteForm.value
    console.log("this is the name.." + JSON.stringify(deleteArray))

    this.adminServ.deleteProdServ(deleteArray).subscribe(result=>{
      if(result == "Success"){
        //this.router.navigate(["deleteProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["deleteProdRoute"]) 
  }

  updateProduct():any{
    let updateArray = this.updateForm.value
    console.log("this is the name.." + updateArray.updateProdPrice)
    
    this.adminServ.updateProdServ(updateArray).subscribe(result=>{
      if(result == "Success"){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["updateProdRoute"]) 
  }
}

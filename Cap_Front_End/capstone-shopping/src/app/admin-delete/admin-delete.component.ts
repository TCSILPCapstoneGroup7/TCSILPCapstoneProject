import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  constructor(public fBuild:FormBuilder, public router:Router, public adminServ:AdminService) { }


  testMsg?:string;

  deleteForm = this.fBuild.group({
    delprodId:['']
  })


  ngOnInit(): void {
  }


  deleteProduct():any{
    let deleteArray = this.deleteForm.value
    console.log("this is the name.." + JSON.stringify(deleteArray))

    this.adminServ.deleteProdServ(deleteArray).subscribe(result=>{
      if(result == "delete working..."){
        //this.router.navigate(["deleteProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["deleteProdRoute"]) 
  }
  
}

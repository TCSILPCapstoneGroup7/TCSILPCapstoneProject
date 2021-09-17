import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-signin',
  templateUrl: './emp-signin.component.html',
  styleUrls: ['./emp-signin.component.css']
})
export class EmpSigninComponent implements OnInit {

  loginForm= this.fb.group({
    Emp_ID: "",
    Emp_Pass: ""
  })


  constructor(private fb:FormBuilder, public empServ:EmployeeService, public router:Router) { }

  testMsg?:string;

  ngOnInit(): void {
    console.log("this is testmsg...."+this.testMsg)
  }

  login(){
    let emploginForm = this.loginForm.value;


    console.log("this is login Form id..."+emploginForm.Emp_ID)
    this.empServ.empLogin(emploginForm).subscribe(result=>{
      if(result == "successful admin login"){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "admin........."+  JSON.stringify(result)
      }else if(result == "successful employee login"){
        this.testMsg = "employee........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    //this.router.navigate([""]) will navigate to page i need it to
  }
  
}

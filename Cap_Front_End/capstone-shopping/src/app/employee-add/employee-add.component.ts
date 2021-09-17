import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeRef = new FormGroup({
    Emp_ID:new FormControl(),
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  
  constructor(public employeeSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  generateID(): number {
    return Math.round(Math.random() * (9999999 - 1000000) + 1000000);
  }

  signUp(){
    let register = this.employeeRef.value;
    register.Emp_ID = this.generateID();
    this.employeeSer.createEmployee(register).subscribe(result=>{
      if(result == "Success"){
        alert("Employee '" + register.Emp_ID + "' Created!")
        this.router.navigate(["employeePanel"]);
      }
      else{
        alert("Failed to register!")
      }
    })
    
    this.employeeRef.reset();
  }
}

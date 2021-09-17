import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  removeRef = new FormGroup({
    email:new FormControl("", [Validators.required])
  })

  constructor(public employeeSer:EmployeeService, public router: Router) { }

  ngOnInit(): void {
  }

  remove(){
    let remove = this.removeRef.value;
    
    this.employeeSer.deleteEmployee(remove).subscribe(result=>{
      if (result == "Success"){
        alert("Successfully deleted Employee '" + remove.email + "'!");
      }
      else{
        console.log("Failed to delete!")
        alert(result);
      }
    })
    
    this.removeRef.reset();
  }
}

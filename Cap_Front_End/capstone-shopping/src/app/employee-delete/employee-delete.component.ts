import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  removeRef = new FormGroup({
    _id:new FormControl("", [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    let removeForm = this.removeRef.value;
    //employeeModel.deleteOne({_id.removeForm._id})
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emp-signin',
  templateUrl: './emp-signin.component.html',
  styleUrls: ['./emp-signin.component.css']
})
export class EmpSigninComponent implements OnInit {

  loginForm= this.fb.group({
    empID: "",
    empPass: ""
  })


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    let emploginForm = this.loginForm.value;
    console.log("this is login Form id..."+emploginForm.empID)

    
    //userModel.findOne({_id:loginForm._id})
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  registerRef = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    dob:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    cPassword:new FormControl("",[Validators.required]),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    let registerForm = this.registerRef.value;

    if (registerForm.password != registerForm.cPassword){
      alert("Passwords do not match!");
    }

    else{
      /*let data = new userModel({
        firstName:registerForm.firstName,
        lastName:registerForm.lastName,
        dob:registerForm.dob,
        phone:registerForm.phone,
        address:registerForm.address,
        email:registerForm.email,
        password:registerForm.password,
        cPassword:registerForm.cPassword})*/
    }

    this.registerRef.reset();
  }
}

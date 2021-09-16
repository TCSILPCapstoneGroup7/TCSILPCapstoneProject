import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
  
  constructor( public userSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  register(){
    let registerForm = this.registerRef.value;

    this.userSer.checkLogin(registerForm).subscribe(result=>{
      if(result == "Success"){
        this.router.navigate(["userPanel"], registerForm.user);
      }
      else{
        alert("Passwords dont match!");
      }
    })

    this.registerRef.reset();
  }
}

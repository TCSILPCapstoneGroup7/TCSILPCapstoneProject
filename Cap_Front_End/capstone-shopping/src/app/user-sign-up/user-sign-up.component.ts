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
  loginRef = new FormGroup({
    userID:new FormControl(),
    unlocked:new FormControl(0),
    funds:new FormControl(0),
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    dob:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    street:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    zip:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    cPassword:new FormControl("",[Validators.required]),
  })
  
  constructor( public loginSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  generateID(): number {
    return Math.round(Math.random() * (9999999 - 1000000) + 1000000);
  }

  accountCreate(){
    let login = this.loginRef.value;
    login.userID = this.generateID();
    this.loginSer.createUser(login).subscribe(result=>{
      if(result == "Success"){
        console.log("User " + login.userID + " registered!")
        alert("Welcome! your userID: " + login.userID)
        this.router.navigate(["userPanel"]);
      }
      else{
        console.log("Failed to register!")
        alert(result);
      }
    })
    
    this.loginRef.reset();
  }
}

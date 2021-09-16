import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  loginRef = new FormGroup({
    _id:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  constructor(public userSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    this.userSer.checkLogin(login).subscribe(result=>{
      if(result == "Success"){
        this.router.navigate(["userHome", login.user]);
      }
      else{
        alert("Wrong Credentials!");
      }
    })
    this.loginRef.reset();
  }


}

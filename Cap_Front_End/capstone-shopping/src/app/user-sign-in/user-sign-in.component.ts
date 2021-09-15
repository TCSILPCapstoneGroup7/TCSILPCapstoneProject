import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    let loginForm = this.loginRef.value;
    //userModel.findOne({_id:loginForm._id})
  }
}

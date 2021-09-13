import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';


@Component({
  selector: 'app-phantom-user',
  templateUrl: './phantom-user.component.html',
  styleUrls: ['./phantom-user.component.css']
})
export class PhantomUserComponent implements OnInit {

  userEditProfile:FormGroup;

  constructor(private fb: FormBuilder) {
    this.userEditProfile = fb.group({

    })
   }

  ngOnInit(): void {
    this.initalizeForm();
  }

  initalizeForm(): void{
    this.userEditProfile= this.fb.group({
      nameFirst:'',
      nameLast: '',
      email: '',
      password: '',
      dob:'',
      phoneNum: '',
      address: '',
      userID: '',

    })
    references: this.fb.array([this.fb.control('')])
  }//end of initalizeForm

}

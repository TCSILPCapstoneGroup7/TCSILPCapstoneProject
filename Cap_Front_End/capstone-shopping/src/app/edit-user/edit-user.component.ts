import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-editUser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  //userEditProfile:FormGroup;
  profileForm = this.fb.group({
    firstName: '',
    lastName: '',
    address: this.fb.group({
      street: '',
      city: '',
      state: '',
      zip: ''
    }),
    phone:'',
    email:''
  });

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }

}

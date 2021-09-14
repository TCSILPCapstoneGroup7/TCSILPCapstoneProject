import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';


@Component({
  selector: 'app-phantom-user',
  templateUrl: './phantom-user.component.html',
  styleUrls: ['./phantom-user.component.css']
})
export class PhantomUserComponent implements OnInit {

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

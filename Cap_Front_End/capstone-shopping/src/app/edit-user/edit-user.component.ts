import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editUser',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  //userEditProfile:FormGroup;
  profileForm = this.fb.group({
    userID:[10],
    firstName: [''],
    lastName: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    phone:[''],
    email:['']
  });

  
  testMsg?:string;

  constructor(private fb: FormBuilder, public router:Router, public custServ:CustomerServiceService) {
   }

  ngOnInit(): void {
  
  }

  updateUser():any{
    let updateArray = this.profileForm.value
    console.log("this is the name.." + updateArray.updateProdPrice)
    
    this.custServ.updateCustomerDetails(updateArray).subscribe(result=>{
      if(result == "update working..."){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["updateProdRoute"]) 
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  @Input() passID = ''

  currentFunds = 10;

  fundsForm= this.fb.group({
    currentBalance: '',
    accNum: '',
    addedfunds: '',
  })

  constructor(private fb:FormBuilder, public router:Router, public service:CustomerServiceService) { }

  ngOnInit(): void {

    this.updateFunds()
    


  }

  updateFunds(){
    let obj= {
      userID:parseInt(this.passID)
    }
    //console.log(temp);
    this.service.getCustomerInfo(obj).subscribe(result =>{
      console.log(result)
      if(result != ""){
        
        let data = result;
        //console.log(data[0].funds);
        this.currentFunds=data[0].funds
        // console.log(data);
        //let currentFunds = data.funds
      }
        
      
    }, error =>{
      console.log(error)
    })

    //console.log("funds loaded")

  }

  addFunds():void{
    //console.log("test")
    let newData = this.fundsForm.value;
    let newTotal = this.currentFunds + newData.addedfunds;
    //console.log(newTotal)

    let obj={
      userID:this.passID,
      funds:newTotal
    }
    console.log(obj)
    this.service.updateCustomerDetails(obj).subscribe((result: string)=>{
      
    }, error =>{
      console.log(error)
    })

    this.updateFunds()
 
  }

}

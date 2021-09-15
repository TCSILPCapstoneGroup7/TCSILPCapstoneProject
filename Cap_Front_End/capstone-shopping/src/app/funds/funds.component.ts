import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  fundsForm= this.fb.group({
    currentBalance: '',
    accNum: '',
    addedfunds: '',
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  addFunds(){
    
  }

}

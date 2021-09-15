import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  // form = this.fb.group({
  //   orders: this.fb.array([])
  // })

  constructor(private fb:FormBuilder) { }

  // get orders(){
  //   return this.form.controls["orders"] as FormArray;
  // }


  ngOnInit(): void {
    // const orderForm = this.fb.group({
    //   orderNum: [''],
    //   status: ['']
    // })

  }

}

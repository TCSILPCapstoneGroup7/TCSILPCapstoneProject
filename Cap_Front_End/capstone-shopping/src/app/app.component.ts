import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-shopping';

  requestRef = new FormGroup({
    productname: new FormControl(""),
    quantityincreased: new FormControl("")
  })
  msg: String = "";

  sendRequest(): void {
    console.log("HELLO");
    // let request = this.requestForm.value
    // productRequestModel.insertMany( {productname: request.productname, quantityincreased: request.quantityincreased}, (err,result) =>{
    //   if (!err) {
    //     console.log("Course stored successfully.")
    //   } else {
    //     console.log(err);
    //   }
    // })
  }
}

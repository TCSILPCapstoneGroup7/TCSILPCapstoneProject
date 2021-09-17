import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  
  constructor(public http:HttpClient) { }

  updateCustomerDetails(customer:customer):Observable<any>{
    console.log("test")
    return this.http.post("http://localhost:9090/api/customer/updateCustomerDetails",customer,{responseType:'text'})
  }

  getCustomerInfo(customer:customer):Observable<any>{
    console.log(customer)
    return this.http.put("http://localhost:9090/api/customer/getCustomerInfo", customer,{responseType:'json'})
  }

  updateCustFunds(customer:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/customer/updateCustFunds",customer,{responseType:'text'})
  }
}

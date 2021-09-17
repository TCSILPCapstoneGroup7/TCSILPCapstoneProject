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
    return this.http.post("http://localhost:9090/api/customer/updateCustomerDetails",customer,{responseType:'text'})
  }

  getCustomerInfo(customer:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/customer/getCustomerInfo",customer, {responseType:'text'})
  }
}

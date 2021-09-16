import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  addProdServ(admin:Admin):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/addProdRoute",admin,{responseType:'text'})

  }
  updateProdServ(admin:Admin):Observable<any>{
    return this.http.put("http://localhost:9090/api/product/updateProdRoute",admin,{responseType:'text'})

  }
  deleteProdServ(admin:Admin):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/deleteProdRoute",admin,{responseType:'text'})

  }
  /* viewReq():Observable<any>{
    return this.http.get("http://localhost:9090/api/product/viewRequest",{responseType:'json'})

  } */

}



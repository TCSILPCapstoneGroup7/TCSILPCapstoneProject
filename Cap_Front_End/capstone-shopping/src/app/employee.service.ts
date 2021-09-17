import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee.mode';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  createEmployee(register:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/EmpAdmins/signUp", register);
  }

  deleteEmployee(remove:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/EmpAdmins/deleteEmployee", remove);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './model/employee.mode';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(public http:HttpClient) { }

  sendRequestSer(emp: Employee ):Observable<any>{
    return this.http.post("http://localhost:9090/sendRequest", emp, {responseType: 'text'});
  }

  showOrdersSer(): Observable<any> {
    return this.http.post("http://localhost:9090/showOrders", { responseType: 'text' });
  }

  updateStatusSer(emp: Employee ): Observable<any> {
    return this.http.post("http://localhost:9090/updateStatus", emp, { responseType: 'text' });
  }

  showTicketsSer(): Observable<any> {
    return this.http.post("http://localhost:9090/showTickets", { responseType: 'text' });
  }

  unlockAccountSer(emp: Employee ): Observable<any> {
    return this.http.post("http://localhost:9090/unlockAccount", emp, { responseType: 'text' });
  }

  editEmpPassSer(emp: Employee ): Observable<any> {
    return this.http.post("http://localhost:9090/editEmpPass", emp, { responseType: 'text' });
  }

  empLogin(emp: Employee ): Observable<any> {
    return this.http.post("http://localhost:9090/api/EmpAdmins/empSignIn", emp, { responseType: 'text' });
  }


  createEmployee(register:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/EmpAdmins/signUp", register);
  }

  deleteEmployee(remove:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/EmpAdmins/deleteEmployee", remove);
  }
}


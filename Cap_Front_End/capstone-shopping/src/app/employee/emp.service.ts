import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(public http:HttpClient) { }

  sendRequestSer(emp: EmployeeComponent):Observable<any>{
    console.log("sendRequestservice");
    return this.http.post("http://localhost:9090/api/employee/sendRequest", emp, {responseType: 'text'});
  }

  showOrdersSer(): Observable<any> {
    return this.http.get("http://localhost:9090/api/employee/showOrders", { responseType: 'text' });
  }

  updateStatusSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/updateStatus", emp, { responseType: 'text' });
  }

  showTicketsSer(): Observable<any> {
    return this.http.get("http://localhost:9090/api/employee/showTickets", { responseType: 'text' });
  }

  unlockAccountSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/unlockAccount", emp, { responseType: 'text' });
  }

  editEmpPassSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/editEmpPass", emp, { responseType: 'text' });
  }

}

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
    return this.http.post("http://localhost:9090/api/employees/endRequest", emp, {responseType: 'text'});
  }

  showOrdersSer(): Observable<any> {
    return this.http.get("http://localhost:9090/api/employees/howOrders", { responseType: 'text' });
  }

  updateStatusSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/api/employees/updateStatus", emp, { responseType: 'text' });
  }

  showTicketsSer(): Observable<any> {
    return this.http.get("http://localhost:9090/api/employees/showTickets", { responseType: 'text' });
  }

  unlockAccountSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/api/employees/unlockAccount", emp, { responseType: 'text' });
  }

  editEmpPassSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/api/employees/editEmpPass", emp, { responseType: 'text' });
  }

}

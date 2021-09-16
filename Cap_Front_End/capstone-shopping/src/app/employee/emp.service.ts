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
    return this.http.post("http://localhost:9090/sendRequest", emp, {responseType: 'text'});
  }

  showOrdersSer(): Observable<any> {
    return this.http.post("http://localhost:9090/showOrders", { responseType: 'text' });
  }

  updateStatusSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/updateStatus", emp, { responseType: 'text' });
  }

  showTicketsSer(): Observable<any> {
    return this.http.post("http://localhost:9090/showTickets", { responseType: 'text' });
  }

  unlockAccountSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/unlockAccount", emp, { responseType: 'text' });
  }

  editEmpPassSer(emp: EmployeeComponent): Observable<any> {
    return this.http.post("http://localhost:9090/editEmpPass", emp, { responseType: 'text' });
  }

}

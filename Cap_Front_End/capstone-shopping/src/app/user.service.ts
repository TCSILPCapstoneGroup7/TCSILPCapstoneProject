import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient ) {}

  checkLogin(login:user):Observable<any>{
    return this.http.post("http://localhost:9090/userSignIn", login, {responseType:'text'});
  }

  regster(login:user):Observable<any>{
    return this.http.post("http://localhost:9090/userSignUp", login, {responseType:'text'});
  }
}

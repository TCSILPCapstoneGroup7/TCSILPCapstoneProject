import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient ) {}

  checkLogin(login:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn", login, 
    {responseType:'text'});
  }

  createUser(login:User):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signUp", login, 
    {responseType:'text'});
  }

  fetchUsers():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/fetchUsers");
  }
}

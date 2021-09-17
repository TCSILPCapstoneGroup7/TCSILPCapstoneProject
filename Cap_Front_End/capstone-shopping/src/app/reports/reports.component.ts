import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  report=true;
  user?:any;

  constructor(public userSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  getUsers(){
    this.user = this.userSer.fetchUsers();
  }
}

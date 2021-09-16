import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navSignIn(){
    this.router.navigate(['/userSignIn']);
  }
  navSignUp(){
    this.router.navigate(['/userSignUp']);
  }
  navRaiseTicket(){
    this.router.navigate(['/']);
  }
}

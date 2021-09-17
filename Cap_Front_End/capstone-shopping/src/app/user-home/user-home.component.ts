import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userID:any
  passID:any

  constructor( private router:ActivatedRoute, public routerA:Router) {
    this.userID= '';
 

    
   }

  ngOnInit(): void {
    this.userID = this.router.snapshot.paramMap.get('id');
  }

  logout(){
    this.routerA.navigate([""]);
  }

  

}

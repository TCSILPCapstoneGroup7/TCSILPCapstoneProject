import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(public fBuild:FormBuilder, public router:Router, public adminServ:AdminService) { }

  req:Array<any> = new Array

  ngOnInit(): void {
    this.adminServ.viewReq().subscribe(info=>{
      console.log("show me info"+ JSON.stringify(info) )
      if(info !== []){
        console.log("this is reqMSG.."+ JSON.stringify(info))
        console.log("this is info data test.."+info[0]._id)
        this.req = info
        console.log("inside..." + JSON.stringify(this.req))
      }else{
        console.log("this is req not working..." + JSON.stringify(this.req))

      }

    })
    console.log("req..."+ this.req)
  }
}

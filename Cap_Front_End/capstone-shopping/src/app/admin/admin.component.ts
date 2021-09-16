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
  
  testMsg?:string;
  reqMsg?:string = "";
  req:Array<any> = new Array

  addForm = this.fBuild.group({
    prodName:[''],
    prodPrice:[''],
    prodQuantity:[''],
  })

  deleteForm = this.fBuild.group({
    delprodId:['']
  })
  
  updateForm = this.fBuild.group({
    updateProdId:[''],
    updateProdPrice:[''],
    updateProdQuantity:[''],
  })

  ngOnInit(): void {
    this.adminServ.viewReq().subscribe(info=>{
      console.log("this is reqMSG.."+ JSON.stringify(info))
      console.log("this is info data test.."+info[0]._id)
      this.req = info
      console.log("inside..." + this.req)
      /* for(let item of info){
        if(item._id == undefined){
          console.log("undifined row")
        }else{
          this.reqMsg +=  `
          <tr>
            <td>${item._id}</td>
            <td>${item.prodName}</td>
            <td>${item.prodPrice}</td>
          </tr>
          `
        }
        console.log("req..."+this.reqMsg)
      } */
      

    })

    
    console.log("req..."+ this.req)
  }

  addProduct():any{
    let addArray = this.addForm.value
    console.log("this is the name.." + addArray.prodName)
    this.adminServ.addProdServ(addArray).subscribe(result=>{
      if(result == "Success"){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    
    
    this.router.navigate(["addProdRoute"]) 
  }
  deleteProduct():any{
    let deleteArray = this.deleteForm.value
    console.log("this is the name.." + JSON.stringify(deleteArray))

    this.adminServ.deleteProdServ(deleteArray).subscribe(result=>{
      if(result == "Success"){
        //this.router.navigate(["deleteProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["deleteProdRoute"]) 
  }

  updateProduct():any{
    let updateArray = this.updateForm.value
    console.log("this is the name.." + updateArray.updateProdPrice)
    
    this.adminServ.updateProdServ(updateArray).subscribe(result=>{
      if(result == "Success"){
        //this.router.navigate(["addProdRoute"]) 
        this.testMsg = "add did worked........."+  JSON.stringify(result)
      }else{
        this.testMsg = "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    this.router.navigate(["updateProdRoute"]) 
  }

  requestView():any{
    
    //this will show on the table
    
  /*   this.adminServ.viewReq().subscribe(result=>{
      if(result){
        //console.log("this is the view array.." + updateArray.updateProdPrice)
        this.reqMsg= "table thing did worked........."+  JSON.stringify(result)
      }else{
        this.reqMsg= "add did NOT WORK worked........"+  JSON.stringify(result)
      }
    })
    console.log("this is reqMSG.."+this.reqMsg)
    return this.reqMsg */
  }


}

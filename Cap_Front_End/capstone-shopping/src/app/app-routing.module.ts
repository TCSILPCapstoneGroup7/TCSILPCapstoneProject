import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FundsComponent } from './funds/funds.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"addProdRoute",component:AdminComponent},
  {path:'employee-component', component: EmployeeComponent},
  {path: 'UserComponent', component:UserHomeComponent},
  {path: 'funds', component:FundsComponent},
  {path: 'userSign',component:UserPanelComponent},
  {path: 'empSign', component:EmpSigninComponent}
  
 
 
]
 /*  {

    path:"**",
    redirectTo:"admin" //delete this when mergin and add back after
  }, 
  {
    path:"",
    redirectTo:"admin",
    pathMatch:"full"
  } */


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

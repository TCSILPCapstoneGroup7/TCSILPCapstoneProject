import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { FundsComponent } from './funds/funds.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:"", component:UserPanelComponent},
  {
    path:"",
    component:UserPanelComponent
  },
  {
    path:"admin/:id",
    component:AdminComponent
  },
  {
    path:"addProdRoute",
    component:AdminComponent
  },
  {
    path:"updateProdRoute",
    component:AdminComponent
  },
  {
    path:"deleteProdRoute",
    component:AdminComponent
  },
  {
    path:"userSignUp",
    component:UserSignUpComponent
  },
  {
    path:"userSignIn",
    component:UserSignInComponent
  },
  {
    path:"userPanel",
    component:UserPanelComponent
  },
  {
    path:"userHome/:id",
    component:UserHomeComponent
  },
  {
    path:"funds",
    component:FundsComponent
  },
  {
    path:"addAdmin",
    component:AdminAddComponent
  },
  {
    path:"updateAdmin",
    component:AdminDeleteComponent
  },
  {
    path:"deleteAdmin",
    component:AdminUpdateComponent
  },
  {
    path:"employeePanel/:id",  
    component:EmployeeComponent
  },
  {    path:'employee-component',
  component: EmployeeComponent
},
{
  path:'employee-sign',
  component: EmpSigninComponent
},
  {
    path:"employeeAdd",
    component:EmployeeAddComponent
  },
  {
    path:"employeeDelete",
    component:EmployeeDeleteComponent
  },
  {
    path:"reports",
    component:ReportsComponent
  },
    {path: '**', 
    redirectTo:'userSignIn'
  },
  
  { path: 'employee', component: EmployeeComponent },
  { path: 'sendRequest', component: EmployeeComponent },
  { path: 'showOrders', component: EmployeeComponent },
  { path: 'updateStatus', component: EmployeeComponent },
  { path: 'showTickets', component: EmployeeComponent },
  { path: 'unlockAccount', component: EmployeeComponent },
  { path: 'editEmpPass', component: EmployeeComponent }
  

  
  /* {

  {path:"admin",component:AdminComponent},
  {path:"addProdRoute",component:AdminComponent},
  {path:"updateProdRoute",component:AdminComponent},
  {path:"deleteProdRoute",component:AdminComponent},

  {path:'employee-component', component: EmployeeComponent},

  {path:'employee', component: EmployeeComponent},
  { path: 'sendRequest', component: EmployeeComponent },
  { path: 'showOrders', component: EmployeeComponent },
  { path: 'updateStatus', component: EmployeeComponent },
  { path: 'showTickets', component: EmployeeComponent },
  { path: 'unlockAccount', component: EmployeeComponent },
  { path: 'editEmpPass', component: EmployeeComponent },

  {path: 'UserHome', component:UserHomeComponent},
  {path: 'userSign',component:UserPanelComponent},
  {path: 'empSign', component:EmpSigninComponent},
 
  {path: '**', redirectTo:'userSign'}
  */
 
 
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

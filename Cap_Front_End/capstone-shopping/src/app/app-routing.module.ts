import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FundsComponent } from './funds/funds.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"addProdRoute",component:AdminComponent},
  {path:"UserComponent", component:UserHomeComponent}
  /* {

  {path:"admin",component:AdminComponent},
  {path:'employee-component', component: EmployeeComponent},
  {path: 'UserComponent', component:UserHomeComponent},
  {path: 'funds', component:FundsComponent}
 
 
]*/
 {

    path:"**",
    redirectTo:"admin" //delete this when mergin and add back after
  }, 
  {
    path:"",
    redirectTo:"admin",
    pathMatch:"full"
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

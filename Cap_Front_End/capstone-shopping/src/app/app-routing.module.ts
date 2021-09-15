import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path:"admin",
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
  /* {

  {path:"admin",component:AdminComponent},
  {path:'employee-component', component: EmployeeComponent},
  {path: 'UserComponent', component:UserHomeComponent},
 
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

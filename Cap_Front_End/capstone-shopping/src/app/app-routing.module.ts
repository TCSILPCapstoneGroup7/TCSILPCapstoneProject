import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:'employee-component', component: EmployeeComponent}
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

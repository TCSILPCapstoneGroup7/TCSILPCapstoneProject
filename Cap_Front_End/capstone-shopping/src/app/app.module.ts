import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    UserSignUpComponent,
    UserPanelComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    UserSignInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
